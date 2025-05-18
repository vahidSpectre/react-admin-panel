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
} from 'reactstrap';
import OptionalSizes from '../../Ui/UiModal/OptionalSizes';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Select from 'react-select';
import Dropzone from 'react-dropzone';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateCategoryAction } from '../../../store/e-commerce/actions';
import Meta from '../Meta';

const CategoryRow = ({ category, index, addToDeleteArray }) => {
 const [createCategoryModalOpen, setCreateCategoryModalOpen] = useState(false);
 const [selectedFiles, setSelectedFiles] = useState([]);
 const [categoryOptions, setCategoryOptions] = useState([]);

 const categories = useSelector(state => state.ecommerce.categories.items);

 const dispatch = useDispatch();

 const initialValues = {
  name: category.name || '',
  slug: category.slug || '',
  is_active: category.is_active || false,
  productdesc: category.description || '',
  parents: category.parents?.map(p => String(p.id)) || [],
  unit: category.unit || 0,
  display_order: category.display_order || 0,
  meta_keywords: category.meta_keywords,
  meta_description: category.meta_description,
  meta_title: category.meta_title,
 };

 function isEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
 }

 const formik = useFormik({
  initialValues,
  validationSchema: yup.object().shape({
   name: yup.string().required('لطفا نام محصول خود را وارد کنید'),
   slug: yup.string(),
   is_active: yup.boolean(),
   productdesc: yup.string(),
   unit: yup.number(),
   parents: yup.array(),
   display_order: yup.number(),
   meta_keywords: yup.array(),
   meta_description: yup.string(),
   meta_title: yup.string(),
  }),
  onSubmit: async values => {
   const payload = {
    name: values.name,
    slug: values.slug,
    description: values.productdesc,
    parents: values.parents.map(Number),
    is_active: values.is_active,
    unit: Number(values.unit || 0),
    display_order: Number(values.display_order),
    id: category.id,
    meta_title: values.meta_title,
    meta_description: values.meta_description,
    meta_keywords: values.meta_keywords,
   };
   const currentValuesForCompare = {
    ...initialValues,
    parents: initialValues.parents.map(Number),
   };

   const updatedValuesForCompare = {
    ...values,
    parents: values.parents.map(Number),
   };

   // ✅ Prevent submission if no changes
   if (isEqual(currentValuesForCompare, updatedValuesForCompare)) {
    toast.info('هیچ تغییری اعمال نشده است.');
    return;
   }
   try {
    dispatch(updateCategoryAction(payload));
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

 //Meta Data
 const metaData = useFormik({
  initialValues: {
   productname: '',
   manufacturername: '',
   metadescription: '',
  },
  validationSchema: yup.object().shape({
   productname: yup.string().required('لطفا نام محصول خود را وارد کنید'),
   manufacturername: yup.string().required('لطفا نام سازنده خود را وارد کنید'),
   metadescription: yup.string().required('لطفا توضیحات متا خود را وارد کنید'),
  }),
  onSubmit: values => {
   metaData.resetForm();
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
  if (categories) {
   setCategoryOptions(
    categories.map(category => ({
     value: category.id,
     label: category.name,
    })),
   );
  }
 }, [categories]);

 return (
  category && (
   <tr>
    <td className='text-nowrap' scope='row'>
     {index}
    </td>
    <td className='text-nowrap' scope='row'>
     <Input
      id='is_active'
      name='is_active'
      type='checkbox'
      onChange={e => addToDeleteArray(e.target.checked, category.id)}
     />
    </td>
    <td>{category.name}</td>
    <td colSpan='1'> {category.display_order}</td>
    <td colSpan='1'> {}</td>
    <td colSpan='1'> {}</td>
    <td colSpan='1'> {}</td>
    <td colSpan='1'> {category.parent ? category.parent.name : '-'}</td>
    <td colSpan='1'>
     {category.is_active ? (
      <Button
       type='submit'
       color='success'
       className='w-100'
       onClick={() => setCreateCategoryModalOpen(true)}>
       فعال
      </Button>
     ) : (
      <Button
       type='submit'
       color='danger'
       className='w-100'
       onClick={() => setCreateCategoryModalOpen(true)}>
       غیر فعال
      </Button>
     )}
    </td>
    <td colSpan='1'>
     {category.is_active ? (
      <center>
       <Button
        type='submit'
        color='success'
        className='w-75 text-center'
        onClick={() => setCreateCategoryModalOpen(true)}>
        فعال
       </Button>
      </center>
     ) : (
      <center>
       <Button
        type='submit'
        color='danger'
        className='w-75 text-center'
        onClick={() => setCreateCategoryModalOpen(true)}>
        غیر فعال
       </Button>
      </center>
     )}
    </td>
    <td colSpan='1'> {}</td>
    <td colSpan='1'> {}</td>
    <td colSpan='1'> {}</td>
    <td colSpan='1'>
     {
      <Row>
       {/* <Col sm='6'>
        <Button
         type='submit'
         color='success'
         className='w-100'
         onClick={() => setCreateCategoryModalOpen(true)}>
         مشاهده
        </Button>
       </Col> */}
       <Col sm='12'>
        <Button
         type='submit'
         color='primary'
         className='w-100'
         onClick={() => setCreateCategoryModalOpen(true)}>
         ویرایش
        </Button>
       </Col>
      </Row>
     }
    </td>
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
             onClick={() => setCreateCategoryModalOpen(false)}>
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

export default CategoryRow;
