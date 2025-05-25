import React, { useEffect, useState } from 'react';

import {
 Button,
 Card,
 CardBody,
 CardTitle,
 Col,
 Container,
 Form,
 Input,
 Label,
 Row,
 FormFeedback,
} from 'reactstrap';
import * as yup from 'yup';
import { useFormik } from 'formik';

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import { toast } from 'react-toastify';
import OptionalSizes from '../Ui/UiModal/OptionalSizes';
import '../../styles/categories.scss';
import { useDispatch } from 'react-redux';

import {
 addMeasurement,
 getMeasurements,
} from '../../store/e-commerce/actions';
import { useSelector } from 'react-redux';
import Unit from './unit/Unit';
const Measurements = () => {
 const measurements = useSelector(state => state.ecommerce.measurements.items);

 const [createUnitModalOpen, setCreateUnitModalOpen] = useState(false);
 const [page, setPage] = useState(1);

 const toggle = () => setCreateUnitModalOpen(!createUnitModalOpen);

 const dispatch = useDispatch();

 const formik = useFormik({
  initialValues: {
   name: '',
   symbol: '',
  },
  validationSchema: yup.object().shape({
   name: yup.string().required('لطفا نام واحد را وارد کنید'),
   symbol: yup.string(),
  }),
  onSubmit: async values => {
   try {
    const payload = {
     name: values.name,
     symbol: values.symbol,
    };
    dispatch(addMeasurement(payload));

    setCreateUnitModalOpen(false);
    formik.resetForm();
   } catch (error) {
    console.error('خطا در ثبت واحد:', error);

    const errorMessage =
     error?.response?.data?.message ||
     error?.message ||
     'مشکلی در ثبت واحد وجود دارد';
    toast.error(errorMessage);
   }
  },
 });

 useEffect(() => {
  dispatch(getMeasurements(page));
 }, []);

 const handleAddId = (status, id) => {
  if (status) {
   setDeletItemsIds(prev => [...prev, id]);
  } else {
   setDeletItemsIds(prev => prev.filter(itemId => itemId !== id));
  }
 };

 useEffect(() => {
  console.log(measurements);
 }, [measurements]);

 return (
  <React.Fragment>
   <div className='page-content category-main-container'>
    <Container fluid>
     {/* Render Breadcrumb */}
     <Breadcrumbs title='تجارت الکترونیک' breadcrumbItem='واحد اندازه گیری' />
     <Row
      className='d-flex align-items-center justify-content-between'
      dir='ltr'>
      <Col sm='3'>
       <Button
        type='submit'
        color='primary'
        onClick={() => setCreateUnitModalOpen(true)}>
        <i
         className='mdi mdi-chart-box-plus-outline'
         style={{ color: '#fff !important' }}></i>
        <span>ایجاد واحد جدید</span>
       </Button>
      </Col>
     </Row>
     <Row>
      <Col className='col-12'>
       <Card>
        <CardBody>
         <CardTitle className='h4'> واحد اندازه گیری</CardTitle>
         <div className='table-responsive'>
          <table className='table table-bordered table-striped table-nowrap mb-0'>
           <thead>
            <tr>
             <th scope='col'>ردیف</th>
             <th scope='col' className='text-center'>
              نام
             </th>
             <th scope='col' className='text-center'>
              سمبل
             </th>
             <th scope='col' className='text-center action-span'>
              عملیات
             </th>
            </tr>
           </thead>
           <tbody>
            {measurements &&
             measurements.map((measurement, i) => {
              return <Unit addToDeleteArray={handleAddId} />;
             })}
           </tbody>
          </table>
         </div>
        </CardBody>
       </Card>
      </Col>
     </Row>
    </Container>
   </div>
   <OptionalSizes
    center={true}
    size={'xl'}
    isOpen={createUnitModalOpen}
    toggle={toggle}>
    <Container fluid>
     <Row>
      <Col xs='12'>
       <Card>
        <CardBody>
         <CardTitle tag='h4'>اطلاعات واحد اندازه گیری</CardTitle>
         <p className='card-title-desc mb-4'>تمام اطلاعات زیر را پر کنید</p>

         <Form onSubmit={formik.handleSubmit} autoComplete='off'>
          <Row>
           <Col sm='6'>
            {' '}
            <div className='mb-3'>
             <Label htmlFor='name'>نام واحد</Label>
             <Input
              id='name'
              name='name'
              type='text'
              placeholder='نام دسته بندی'
              value={formik.values.name}
              onChange={formik.handleChange}
              invalid={formik.touched.name && formik.errors.name ? true : false}
             />
             {formik.errors.name && formik.touched.name ? (
              <FormFeedback type='invalid'>{formik.errors.name}</FormFeedback>
             ) : null}
            </div>{' '}
           </Col>
           <Col sm='6'>
            {' '}
            <div className='mb-3'>
             <Label htmlFor='symbol'> سمبل واحد </Label>
             <Input
              id='symbol'
              name='symbol'
              type='text'
              placeholder='واحد فروش '
              value={formik.values.symbol}
              onChange={formik.handleChange}
              invalid={
               formik.touched.symbol && formik.errors.symbol ? true : false
              }
             />
             {formik.errors.symbol && formik.touched.symbol ? (
              <FormFeedback type='invalid'>{formik.errors.symbol}</FormFeedback>
             ) : null}
            </div>
           </Col>
          </Row>
          <div className='d-flex flex-wrap gap-2'>
           <Button type='submit' color='primary' disabled={formik.isSubmitting}>
            ذخیره تغییرات
           </Button>
           <Button
            type='button'
            color='secondary'
            onClick={() => formik.resetForm()}>
            لغو
           </Button>
          </div>
         </Form>
        </CardBody>
       </Card>
      </Col>
     </Row>
    </Container>
   </OptionalSizes>
  </React.Fragment>
 );
};

export default Measurements;
