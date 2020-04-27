import React from 'react';
import { metaData } from './meta/meta-1';

export const Dataset = ({ data, header = '' }) => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<div style={{ fontSize: 16, fontWeight: 600, alignSelf: 'center', marginBottom: 20 }}>{header}</div>
			{Object.entries(data).map((a, i) => (
				<div style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
					<div
						style={{
							textAlign: 'right',
							fontWeight: 600,
							marginRight: 5
						}}
					>
						{a[0]}:
					</div>
					{a[1] && (
						<div style={{ textAlign: 'left' }}>
							{typeof a[1] !== 'object' ? a[1] : <Dataset data={a[1]} />}
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export const byType = (type) => (item) => item.type === type;
export const byId = (id) => (item) => item.formId === id;

//od
export const getFormMeta = (formId) => ({ 1: metaData, 2: metaData }[formId] || metaData);

export const getFormAttributes = (elements, previousUserInput) =>
	Object.assign(
		{},
		...elements
			.map((a) =>
				Object.values(a['formElements']).map((x) => {
					return { [`${x.name}`]: previousUserInput[x.name] || null };
				})
			)
			.flat(1)
	);
