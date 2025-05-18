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
import OptionalSizes from '../Ui/UiModal/OptionalSizes';
import Dropzone from 'react-dropzone';
import '../../styles/categories.scss';
import { useDispatch } from 'react-redux';

import CategoryRow from './category/CategoryRow';
import {
 addCategories,
 deleteCategory,
 getCategories,
} from '../../store/e-commerce/actions';
import { useSelector } from 'react-redux';
import CustomPagination from '../../components/Common/CustomPagination';
import Meta from './Meta';
const EcommerenceAddCategory = () => {
 const [createCategoryModalOpen, setCreateCategoryModalOpen] = useState(false);
 const [selectedFiles, setSelectedFiles] = useState([]);
 const [page, setPage] = useState(1);
 const [categoryOptions, setCategoryOptions] = useState([]);
 const [deletItemsIds, setDeletItemsIds] = useState([]);
 //  const [categories, setCategories] = useState([]);

 const categories = useSelector(state => state.ecommerce.categories.items);
 const pagination = useSelector(state => state.ecommerce.categories.pagination);

 const dispatch = useDispatch();

 //meta title
 document.title = 'دسته بندی ها ';

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
   parent_ids: [],
   unit: 0,
   display_order: 0,
   meta: {
    meta_keywords: [],
    meta_description: '',
    meta_title: '',
    canonical: '',
   },
  },
  validationSchema: yup.object().shape({
   name: yup.string().required('لطفا نام محصول خود را وارد کنید'),
   slug: yup.string(),
   is_active: yup.boolean(),
   productdesc: yup.string(),
   unit: yup.number(),
   parent_ids: yup.array(),
   display_order: yup.number(),
   meta: yup.object().shape({
    meta_keywords: yup.array(),
    meta_description: yup.string(),
    meta_title: yup.string(),
    canonical: yup.string(),
   }),
  }),
  onSubmit: async values => {
   try {
    const payload = {
     name: values.name,
     slug: values.slug,
     description: values.productdesc,
     parent_ids: values.parent_ids.map(Number),
     is_active: values.is_active,
     unit: Number(values.unit || 0),
     display_order: Number(values.display_order),
     meta: {
      meta_title: values.meta.meta_title,
      meta_description: values.meta.meta_description,
      meta_keywords: values.meta.meta_keywords,
      canonical: values.meta.canonical,
     },
    };

    console.log(payload);
    dispatch(addCategories(payload));

    setCreateCategoryModalOpen(false);
    formik.resetForm();
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

 function handleAcceptedFiles(files, type) {
  files.map(file =>
   Object.assign(file, {
    preview: URL.createObjectURL(file),
    formattedSize: formatBytes(file.size),
   }),
  );

  setSelectedFiles(files);
 }

 const handleGoToMusurements = () => {};

 const handleDeleteItems = () => {
  dispatch(deleteCategory(deletItemsIds));
 };

 useEffect(() => {
  dispatch(getCategories(page));
 }, []);

 const handlePaginationChange = page => {
  dispatch(getCategories(page));
 };

 useEffect(() => {
  console.log(categories);
  if (categories) {
   setCategoryOptions(
    categories.map(category => ({
     value: category.id,
     label: category.name,
    })),
   );
  }
 }, [categories, pagination]);

 const handleAddId = (status, id) => {
  if (status) {
   setDeletItemsIds(prev => [...prev, id]);
  } else {
   setDeletItemsIds(prev => prev.filter(itemId => itemId !== id));
  }
 };

 useEffect(() => {
  console.log(deletItemsIds);
 }, [deletItemsIds]);

 return (
  <React.Fragment>
   <div className='page-content category-main-container'>
    <Container fluid>
     {/* Render Breadcrumb */}
     <Breadcrumbs title='تجارت الکترونیک' breadcrumbItem='دسته بندی' />
     <Row
      className='d-flex align-items-center justify-content-between'
      dir='ltr'>
      <Col sm='6'>
       <div className='d-flex align-items-center my-3'>
        <Button
         type='submit'
         color='primary'
         onClick={() => setCreateCategoryModalOpen(true)}>
         <i
          className='mdi mdi-chart-box-plus-outline'
          style={{ color: '#fff !important' }}></i>
         <span>ایجاد دسته‌بندی</span>
        </Button>
        <Button
         type='submit'
         color='primary'
         className='mx-3'
         onClick={handleGoToMusurements}>
         <i
          className='mdi mdi-tape-measure
'
          style={{ color: '#fff !important' }}></i>
         <span>واحد های اندازه گیری</span>
        </Button>
        <Button
         type='submit'
         color='danger'
         onClick={handleDeleteItems}
         disabled={deletItemsIds.length === 0}
         style={{ width: '220px' }}>
         <i className='mdi mdi-delete' style={{ color: '#fff !important' }}></i>
         <span>
          {deletItemsIds.length > 0 && `(${deletItemsIds.length})`}&nbsp;
          {deletItemsIds.length > 1
           ? 'پاک کردن دسته بندی ها'
           : 'پاک کردن دسته بندی'}
         </span>
        </Button>
       </div>
      </Col>
      <Col sm='3'>
       <form className='app-search d-none d-lg-block'>
        <div className='position-relative'>
         <input
          type='text'
          className='form-control bg-white'
          placeholder='جستجو...'
          dir='rtl'
         />
         <span className='bx bx-search-alt' />
        </div>
       </form>
      </Col>
     </Row>
     <Row>
      <Col className='col-12'>
       <Card>
        <CardBody>
         <CardTitle className='h4'>دسته‌بندی ها</CardTitle>
         <div className='table-responsive'>
          <table className='table table-bordered table-striped table-nowrap mb-0'>
           <thead>
            <tr>
             <th scope='col'>ردیف</th>
             <th scope='col'>انتخاب</th>
             <th scope='col' className='text-center'>
              نام
             </th>
             <th scope='col' className='text-center'>
              اولویت
             </th>
             <th scope='col' className='text-center'>
              آیکن
             </th>
             <th scope='col' className='text-center'>
              بنر
             </th>
             <th scope='col' className='text-center'>
              تصویر منو
             </th>
             <th scope='col' className='text-center'>
              والد
             </th>
             <th scope='col' className='text-center'>
              وضعیت
             </th>
             <th scope='col' className='text-center'>
              نمایش در صفحه اصلی
             </th>
             <th scope='col' className='text-center'>
              تعرفه های ارسال با پیک فروشگاه
             </th>
             <th scope='col' className='text-center'>
              تنظیمات ارسال
             </th>
             <th scope='col' className='text-center'>
              فروش
             </th>
             <th scope='col' className='text-center action-span'>
              عملیات
             </th>
            </tr>
           </thead>
           <tbody>
            {categories &&
             categories.map((category, i) => {
              return (
               <CategoryRow
                category={category}
                index={i + 1}
                key={i}
                addToDeleteArray={handleAddId}
               />
              );
             })}
           </tbody>
          </table>
         </div>
         {pagination && categories.lenght > 0 && (
          <CustomPagination
           pagination={pagination}
           onPageChange={handlePaginationChange}
          />
         )}
        </CardBody>
       </Card>
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
             <Label htmlFor='parent_ids'>دسته بندی والد</Label>
             <Select
              classNamePrefix='select2-selection'
              name='parent_ids'
              placeholder='انتخاب ...'
              options={categoryOptions}
              isMulti
              value={categoryOptions.filter(option =>
               formik.values.parent_ids.includes(option.value),
              )}
              onChange={selectedOptions =>
               formik.setFieldValue(
                'parent_ids',
                selectedOptions.map(option => option.value),
               )
              }
             />

             {formik.errors.parent_ids && formik.touched.parent_ids ? (
              <FormFeedback type='invalid'>
               {formik.errors.parent_ids}
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
          <Row>
           <Col sm='4'>
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
                   <p>فایل ها را اینجا رها کنید یا برای آپلود کلیک کنید</p>
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
           </Col>
           <Col sm='4'>
            <CardBody>
             <CardTitle className='mb-3'>تصویر آیکون </CardTitle>
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
                   <p>فایل ها را اینجا رها کنید یا برای آپلود کلیک کنید</p>
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
           </Col>
           <Col sm='4'>
            <CardBody>
             <CardTitle className='mb-3'> تصویر بنر</CardTitle>
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
                   <p>فایل ها را اینجا رها کنید یا برای آپلود کلیک کنید</p>
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
           </Col>
          </Row>
          <Meta formik={formik} />
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
