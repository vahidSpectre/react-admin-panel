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
import Select from 'react-select';

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import { toast } from 'react-toastify';
import { createCategory } from '../../services/categories.api';
import OptionalSizes from '../Ui/UiModal/OptionalSizes';
import Dropzone from 'react-dropzone';
import '../../styles/categories.scss';
const EcommerenceAddCategory = () => {
 const [createCategoryModalOpen, setCreateCategoryModalOpen] = useState(true);
 const [selectedFiles, setSelectedFiles] = useState([]);

 //meta title
 document.title = 'Add Product | Skote - قالب مدیریتی و داشبورد Vite React ';

 const options = [
  { value: 'AK', label: 'تهران' },
  { value: 'HI', label: 'اصفهان' },
  { value: 'CA', label: 'مشهد' },
  { value: 'NV', label: 'قزوین' },
  { value: 'OR', label: 'ایلام' },
  { value: 'WA', label: 'زنجان' },
 ];

 const formik = useFormik({
  initialValues: {
   name: '',
   slug: '',
   is_active: false,
   productdesc: '',
   parents: [],
   unit: 0,
  },
  validationSchema: yup.object().shape({
   name: yup.string().required('لطفا نام محصول خود را وارد کنید'),
   slug: yup.string(),
   is_active: yup.boolean(),
   productdesc: yup.string(),
   unit: yup.number(),
   parents: yup.array(),
  }),
  onSubmit: async values => {
   try {
    const payload = {
     name: values.name,
     slug: values.slug,
     description: values.productdesc,
     parents: values.parents.map(Number),
     is_active: values.is_active,
     unit: Number(values.unit || 0),
    };

    const res = await createCategory(payload);

    const message = res?.message || 'دسته‌بندی با موفقیت ایجاد شد';
    toast.success(message);

    // formik.resetForm();
   } catch (error) {
    console.error('خطا در ثبت دسته‌بندی:', error);

    const errorMessage =
     error?.response?.data?.message ||
     error?.message ||
     'مشکلی در ثبت دسته‌بندی وجود دارد';
    toast.error(errorMessage);
   }
  },
 });

 const toggle = () => setCreateCategoryModalOpen(!createCategoryModalOpen);

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
  console.log(selectedFiles);
 }, [selectedFiles]);

 return (
  <React.Fragment>
   <div className='page-content category-main-container'>
    <Container fluid>
     {/* Render Breadcrumb */}
     <Breadcrumbs title='تجارت الکترونیک' breadcrumbItem='دسته بندی' />
     <Row dir='ltr'>
      <Col sm='4'>
       <Row>
        <Col sm='6'>
         <Button
          type='submit'
          color='primary'
          onClick={() => setCreateCategoryModalOpen(true)}>
          <i
           className='bxr bx-plus-square text-white'
           style={{ color: '#fff' }}></i>
          <span> ایجاد دسته‌بندی</span>
         </Button>
        </Col>
        <Col sm='6'>
         <Button
          type='submit'
          color='primary'
          onClick={() => setCreateCategoryModalOpen(true)}>
          واحد های اندازه گیری
         </Button>
        </Col>
       </Row>
      </Col>
     </Row>
    </Container>
   </div>
   <OptionalSizes
    center={true}
    size={'xl'}
    isOpen={createCategoryModalOpen}
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
             <Label htmlFor='unit'> واحد فروش </Label>
             <Input
              id='unit'
              name='unit'
              type='text'
              placeholder='واحد فروش '
              value={formik.values.unit}
              onChange={formik.handleChange}
              invalid={formik.touched.unit && formik.errors.unit ? true : false}
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
              invalid={formik.touched.slug && formik.errors.slug ? true : false}
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
              options={options}
              isMulti
              value={options.filter(option =>
               formik.values.parents.includes(option.value),
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
          <div className='mb-3'>
           <Label htmlFor='is-active'>فعال</Label>
           &nbsp;
           <Input
            id='is_active'
            name='is_active'
            type='checkbox'
            checked={formik.values.is_active}
            onChange={e => formik.setFieldValue('is_active', e.target.checked)}
           />
           {formik.errors.price && formik.touched.price ? (
            <FormFeedback type='invalid'>{formik.errors.price}</FormFeedback>
           ) : null}
          </div>

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
            <CardTitle className='mb-3'>تصاویر دسته بندی</CardTitle>
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
          </Card>
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

export default EcommerenceAddCategory;
