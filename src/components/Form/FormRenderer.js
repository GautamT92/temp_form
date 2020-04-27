import React, {useEffect} from 'react';
import { Form, Input, Row, Col, Button,Select, Checkbox, Radio } from 'antd';
import 'antd/dist/antd.css';
import {LoginFormLayout, SubmitButton} from './Form.style'
import { css } from '@emotion/core';

const FormRenderer = ({ metadata = {}, activeForm, updateForm, theme }) => {
	const { title = null, subTitle = null, description = null, elements = [] } = metadata;
	const [form] = Form.useForm();
	const values=activeForm?.data??null;
	useEffect(
		() => {
			const setFieldsValue = async () => {
				form.setFieldsValue(values)
			};
			setFieldsValue();
		},
		 [ values, form ]
	);

	return (
		<LoginFormLayout theme={theme}>
			<Title text={title} />
			<SubTitle text={subTitle} />
			<Description text={description} />
			{elements.map((a, i) => <RenderElements form={form} key={i} updateForm={updateForm}  {...a} />)}
			<SubmitButton onClick={()=>alert('@#@!#')}> Done</SubmitButton>
		</LoginFormLayout>
	);
};


const RenderElements = ({ title, subTitle, description, updateForm, list = [], formElements = [], grid = {}, form }) => {
	return (
		<div>
			<Title small text={title} />
			<SubTitle small text={subTitle} />
			<Description {...grid} text={description} />
			{list.length > 0 && <List grid={grid} list={list} />}
			<Form
				form={form}
				layout={'vertical'}
				name={`${title}`}
				onValuesChange={updateForm}
			>
				<Row {...rowStyleProps}>
					{formElements.length > 0 &&
						formElements.map((a, i) => {
							return <FormItem key={i} {...a} />;
						})}
				</Row>
			</Form>
		</div>
	);
};

const FormItem = ({ type, grid = {}, ...rest }) => {
	const { name } = rest;
	const { label, rules, placeholder } = rest.properties;
	const { col } = grid;
	return (
		<Col {...col}>
			<Form.Item name={name} rules={rules}>
				{{
					textarea: <Input.TextArea placeholder={ placeholder} />,
					text: <Input placeholder={ placeholder} />,
					checkbox: <Checkbox.Group placeholder={ placeholder} options={rest.properties.options} />,
					radiogroup: <Radio.Group placeholder={ placeholder} options={rest.properties.options} />,
					select: <Select placeholder={ placeholder} options={rest.properties.options} />

				}[type] || <Input />}
			</Form.Item>
		</Col>
	);
};
const TextComponent = ({ text, style, offset = 0 }) => (
	<Row {...rowStyleProps} style={style}>
		<Col offset={offset}>{text}</Col>
	</Row>
);
const Title = ({ small = false, ...rest }) => <TextComponent style={small ? titleSmall : titleBig} {...rest} />;
const SubTitle = ({ small = false, ...rest }) => (
	<TextComponent style={small ? subTitleSmall : subTitleBig} {...rest} />
);
const Description = (props) => <TextComponent {...props} />;
const List = ({ list, grid }) => list.map((a, i) => <Description key={i} text={a} {...grid} />);

export default FormRenderer;

const rowStyleProps = { gutter: [ 16, 4 ] };
const titleBig = { fontWeight: 600, fontSize: 22 };
const titleSmall = { fontWeight: 400, fontSize: 16 };
const subTitleBig = { fontWeight: 600, fontSize: 18 };
const subTitleSmall = { fontWeight: 500, fontSize: 16 };
