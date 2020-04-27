import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import FormRenderer from './components/Form/FormRenderer';
import * as metadataMock from './meta';

const DynamicForm = ({ state, dispatch }) => {
	const activeForm = state.getActiveForm();
	const [ metadata, setMetadata ] = useState({});
	const { userInfo } = state;
	useEffect(
		() => {
			const getMetadata = async () => {
				const formMetadata =
					{
						1: metadataMock.metadata1,
						2: metadataMock.metadata2,
						3: metadataMock.metadata3
					}[activeForm.formId] || {};
				setMetadata(formMetadata);
			};
			getMetadata();
		},
		[ activeForm ]
	);
	useEffect(
		() => {
			const getFormElements = () => {
				const { elements } = metadata;
				let attributes = elements.filter((a) => a?.formElements).map((x) => x?.formElements).flat(1).map(item=>item?.name);
				const formInitValues= Object.assign ({}, ...attributes.map(a=> { return {[a]: userInfo[a]??null}}));
				const data={...formInitValues, ...activeForm?.data??{}}
				dispatch({type:'UPDATE_FORM', payload:{formId:activeForm.formId, data}})
			};
			if (metadata.elements) getFormElements();
		},
		[ metadata ]
	);
		const updateFormData=(values)=>
		{
			const data={...activeForm.data, ...values}
			dispatch({type:'UPDATE_FORM', payload:{formId:activeForm.formId, data}})
		}

		return <FormRenderer activeForm={activeForm} metadata={metadata} updateForm={updateFormData} />;
};

export default DynamicForm;
