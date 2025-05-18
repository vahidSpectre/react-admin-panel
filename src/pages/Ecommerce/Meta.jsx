import React, { useEffect } from 'react';
import {
 Card,
 CardBody,
 CardTitle,
 Col,
 Form,
 Input,
 Label,
 Row,
 FormFeedback,
} from 'reactstrap';
import TagInput from '../../components/Common/TagInput';

const Meta = ({ formik }) => {
 const { values, handleChange, touched, errors, setFieldValue } = formik;
 useEffect(() => {
  console.log(values);
 }, [values]);

 return (
  <Card>
   <CardBody>
    <CardTitle tag='h4'>متا دیتا</CardTitle>
    <p className='card-title-desc mb-3'>Meta Data Settings </p>

    <Form autoComplete='off'>
     <Row>
      <Col sm={6}>
       <div className='mb-3'>
        <Label htmlFor='meta_title'> Meta Title</Label>
        <Input
         id='meta_title'
         name='meta_title'
         type='text'
         placeholder='title'
         value={values.meta.meta_title}
         onChange={handleChange}
        />
       </div>

       <div className='mb-3'>
        <Label htmlFor='meta_title'>Canocical Tag</Label>
        <Input
         id='meta_title'
         name='meta_title'
         type='text'
         placeholder='canonical'
         value={values.meta.canonical}
         onChange={handleChange}
        />
       </div>

       <div className='mb-3'>
        <Label htmlFor='meta_keywords'>Meta Keywords</Label>
        <TagInput
         tags={values.meta.meta_keywords}
         setTags={tags => setFieldValue('meta_keywords', tags)}
        />
       </div>
      </Col>

      <Col sm={6}>
       <div className='mb-3'>
        <Label htmlFor='meta_description'>Meta Description</Label>
        <Input
         name='meta_description'
         id='meta_description'
         tag='textarea'
         rows={5}
         placeholder='description'
         value={values.meta.meta_description}
         onChange={handleChange}
        />
       </div>
      </Col>
     </Row>
    </Form>
   </CardBody>
  </Card>
 );
};

export default Meta;
