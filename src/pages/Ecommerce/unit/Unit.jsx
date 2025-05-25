import React, { useEffect, useState } from 'react';
import {
 Button,
 Card,
 CardBody,
 CardTitle,
 Col,
 Container,
 Form,
 FormFeedback,
 Input,
 Label,
 Row,
} from 'reactstrap';
import OptionalSizes from '../../Ui/UiModal/OptionalSizes';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Select from 'react-select';
import Dropzone from 'react-dropzone';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
 getCategory,
 getMeasurement,
 updateCategoryAction,
} from '../../../store/e-commerce/actions';
import Meta from '../Meta';

const Unit = ({ category, index, addToDeleteArray }) => {
 const units = useSelector(state => state.ecommerce.measurements.items);
 const unitDetail = useSelector(state => state.ecommerce.measurement);

 const [createUnitModalOpen, setCreateUnitModalOpen] = useState(false);
 const [selectedFiles, setSelectedFiles] = useState([]);
 const [categoryOptions, setCategoryOptions] = useState([]);
 const [initialValues, setInitialValues] = useState({
  name: unitDetail.name || '',
  symbol: unitDetail.slug || '',
 });

 const dispatch = useDispatch();

 function isEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
 }

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

 const toggle = () => setCreateUnitModalOpen(!createUnitModalOpen);

 function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
 }

 function handleAcceptedFiles(files) {
  files.map(file =>
   Object.assign(file, {
    preview: URL.createObjectURL(file),
    formattedSize: formatBytes(file.size),
   }),
  );

  setSelectedFiles(files);
 }

 useEffect(() => {
  console.log('first');
  if (createUnitModalOpen) {
   dispatch(getMeasurement(unit.id));
  }
 }, [createUnitModalOpen]);

 useEffect(() => {
  console.log(unitDetail);
  setInitialValues(unitDetail);
 }, [unitDetail]);

 useEffect(() => {
  console.log('initialValues', initialValues);
 }, [initialValues]);

 return (
  unit && (
   <tr>
    <td className='text-nowrap' scope='row'>
     {index}
    </td>
    <td>{unit.name}</td>
    <td>{unit.symbol}</td>
    <td colSpan='1'>
     {
      <Row>
       {/* <Col sm='6'>
        <Button
         type='submit'
         color='success'
         className='w-100'
         onClick={() => setCreateUnitModalOpen(true)}>
         مشاهده
        </Button>
       </Col> */}
       <Col sm='12'>
        <Button
         type='submit'
         color='primary'
         className='w-100'
         onClick={() => setCreateUnitModalOpen(true)}>
         ویرایش
        </Button>
       </Col>
      </Row>
     }
    </td>
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
          <CardTitle tag='h4'>اطلاعات دسته بندی</CardTitle>
          <p className='card-title-desc mb-4'>تمام اطلاعات زیر را پر کنید</p>

          <Form onSubmit={formik.handleSubmit} autoComplete='off'>
           <Row>
            <Col sm='6'>
             {' '}
             <div className='mb-3'>
              <Label htmlFor='name'>نام محصول</Label>
              <Input
               id='name'
               name='name'
               type='text'
               placeholder='نام دسته بندی'
               value={formik.values.name}
               onChange={formik.handleChange}
               invalid={
                formik.touched.name && formik.errors.name ? true : false
               }
              />
              {formik.errors.name && formik.touched.name ? (
               <FormFeedback type='invalid'>{formik.errors.name}</FormFeedback>
              ) : null}
             </div>{' '}
            </Col>
            <Col sm='6'>
             {' '}
             <div className='mb-3'>
              <Label htmlFor='unit'> واحد فروش </Label>
              <Input
               id='unit'
               name='unit'
               type='text'
               placeholder='واحد فروش '
               value={formik.values.unit}
               onChange={formik.handleChange}
               invalid={
                formik.touched.unit && formik.errors.unit ? true : false
               }
              />
              {formik.errors.unit && formik.touched.unit ? (
               <FormFeedback type='invalid'>{formik.errors.unit}</FormFeedback>
              ) : null}
             </div>
            </Col>
           </Row>
           <Row>
            <Col sm='6'>
             <div className='mb-3'>
              <Label htmlFor='slug'>نام اختصاری</Label>
              <Input
               id='slug'
               name='slug'
               type='text'
               placeholder='نام اختصاری'
               value={formik.values.slug}
               onChange={formik.handleChange}
               invalid={
                formik.touched.slug && formik.errors.slug ? true : false
               }
              />
              {formik.errors.slug && formik.touched.slug ? (
               <FormFeedback type='invalid'>{formik.errors.slug}</FormFeedback>
              ) : null}
             </div>
            </Col>
            <Col sm='6'>
             <div className='mb-3'>
              <Label htmlFor='parents'>دسته بندی والد</Label>
              <Select
               classNamePrefix='select2-selection'
               name='parents'
               placeholder='انتخاب ...'
               options={categoryOptions}
               isMulti
               value={categoryOptions.filter(option =>
                formik.values.parents?.includes(option.value),
               )}
               onChange={selectedOptions =>
                formik.setFieldValue(
                 'parents',
                 selectedOptions.map(option => option.value),
                )
               }
              />

              {formik.errors.parents && formik.touched.parents ? (
               <FormFeedback type='invalid'>
                {formik.errors.parents}
               </FormFeedback>
              ) : null}
             </div>
            </Col>
           </Row>
           <Row>
            <Col sm='6'>
             <div className='mb-3'>
              <Label htmlFor='is-active'>فعال</Label>
              &nbsp;
              <Input
               id='is_active'
               name='is_active'
               type='checkbox'
               checked={formik.values.is_active}
               onChange={e =>
                formik.setFieldValue('is_active', e.target.checked)
               }
              />
              {formik.errors.price && formik.touched.price ? (
               <FormFeedback type='invalid'>{formik.errors.price}</FormFeedback>
              ) : null}
             </div>
            </Col>
            <Col sm='6'>
             <div className='mb-3'>
              <Label htmlFor='display_order'>اولویت نمایش </Label>
              <Input
               id='display_order'
               name='display_order'
               type='text'
               placeholder='واحد فروش '
               value={formik.values.display_order}
               onChange={formik.handleChange}
               invalid={
                formik.touched.display_order && formik.errors.display_order
                 ? true
                 : false
               }
              />
              {formik.errors.display_order && formik.touched.display_order ? (
               <FormFeedback type='invalid'>
                {formik.errors.display_order}
               </FormFeedback>
              ) : null}
             </div>
            </Col>
           </Row>

           <Row>
            <Col sm='6'>
             <div className='mb-3'>
              <Label htmlFor='productdesc'> توضیحات دسته بندی</Label>
              <Input
               tag='textarea'
               className='mb-3'
               id='productdesc'
               name='productdesc'
               rows={5}
               placeholder='توضیحات دسته بندی'
               value={formik.values.productdesc}
               onChange={formik.handleChange}
               invalid={
                formik.touched.productdesc && formik.errors.productdesc
                 ? true
                 : false
               }
              />
              {formik.errors.productdesc && formik.touched.productdesc ? (
               <FormFeedback type='invalid'>
                {formik.errors.productdesc}
               </FormFeedback>
              ) : null}
             </div>
            </Col>
           </Row>
           <Card>
            <CardBody>
             <CardTitle className='mb-3'>تصویر دسته بندی</CardTitle>
             <Form>
              <Dropzone
               onDrop={acceptedFiles => {
                handleAcceptedFiles(acceptedFiles);
               }}>
               {({ getRootProps, getInputProps }) => (
                <div className='dropzone'>
                 <div className='dz-message needsclick' {...getRootProps()}>
                  <input {...getInputProps()} />
                  <div className='dz-message needsclick'>
                   <div className='mb-3'>
                    <i className='display-4 text-muted bx bxs-cloud-upload' />
                   </div>
                   <h4>فایل ها را اینجا رها کنید یا برای آپلود کلیک کنید</h4>
                  </div>
                 </div>
                </div>
               )}
              </Dropzone>
              <ul className='list-unstyled mb-0' id='file-previews'>
               {selectedFiles.map((file, index) => {
                return (
                 <li className='mt-2 dz-image-preview' key=''>
                  <div className='border rounded'>
                   <div className='d-flex flex-wrap gap-2 p-2'>
                    <div className='flex-shrink-0 me-3'>
                     <div className='avatar-sm bg-light rounded p-2'>
                      <img
                       data-dz-thumbnail=''
                       className='img-fluid rounded d-block'
                       src={file.preview}
                       alt={file.name}
                      />
                     </div>
                    </div>
                    <div className='flex-grow-1'>
                     <div className='pt-1'>
                      <h5 className='fs-md mb-1' data-dz-name>
                       {file.path}
                      </h5>
                      <strong
                       className='error text-danger'
                       data-dz-errormessage></strong>
                     </div>
                    </div>
                    <div className='flex-shrink-0 ms-3'>
                     <Button
                      color='danger'
                      size='sm'
                      onClick={() => {
                       const newImages = [...selectedFiles];
                       newImages.splice(index, 1);
                       setSelectedFiles(newImages);
                      }}>
                      حذف
                     </Button>
                    </div>
                   </div>
                  </div>
                 </li>
                );
               })}
              </ul>
             </Form>
            </CardBody>
            <Meta formik={formik} />
           </Card>
           <div className='d-flex flex-wrap gap-2'>
            <Button
             type='submit'
             color='primary'
             disabled={
              formik.isSubmitting || isEqual(formik.values, initialValues)
             }>
             ذخیره تغییرات
            </Button>
            <Button
             type='button'
             color='secondary'
             onClick={() => setCreateUnitModalOpen(false)}>
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
   </tr>
  )
 );
};

export default Unit;
