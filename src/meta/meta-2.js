const metadata2 = {
	title: 'AGENT AMENDMENT ACT',
	subTitle: 'Agency Information',
	elements: [
		{
			grid: {
				row: {
					gutter: 24
				}
			},
			formElements: [
				{
					type: 'text',
					name: 'firstName',
					grid: {
						col: {
							xs: 24,
							sm: 12,
							md: 8
						}
					},
					properties: {
						placeholder: 'First Name',
						label: {
							name: 'First Name'
						},
						disabled: false,
						rules: [
							{
								required: true
							}
						]
					}
				},
				{
					type: 'text',
					name: 'lastName',
					grid: {
						col: {
							xs: 24,
							sm: 12,
							md: 8
						}
					},
					properties: {
						placeholder: 'Last Name',
						label: {
							name: 'Last Name'
						},
						disabled: false,
						rules: [
							{
								required: true
							}
						]
					}
				},
				{
					type: 'text',
					name: 'businessName',
					grid: {
						col: {
							xs: 24,
							sm: 12,
							md: 8
						}
					},
					properties: {
						placeholder: 'Business Name',
						label: {
							name: 'Business Name'
						},
						disabled: false,
						rules: [
							{
								required: true
							}
						]
					}
				},
				{
					type: 'radio',
					name: 'showAddress',
					grid: {
						col: {
							xs: 24,
							sm: 12,
							md: 8
						}
					},
					hasDependants: true,
					dependants: {
						value: 'yes'
					},
					properties: {
						placeholder: `Need's Address`,
						label: {
							name: `Need's Address`
						},
						options: [
							{
								label: 'Yes',
								value: 'yes'
							},
							{
								label: 'No',
								value: 'no'
							}
						],
						disabled: false,
						rules: [
							{
								required: false
							}
						]
					}
				},
				{
					type: 'text',
					name: 'address',
					isDependant: true,
					grid: {
						col: {
							xs: 24,
							sm: 12,
							md: 8
						}
					},
					properties: {
						placeholder: 'Address',
						label: {
							name: 'Address'
						},
						dependant: {
							name: 'showAddress',
							value: 'yes',
							method: 'onChange'
						},
						disabled: false,
						rules: [
							{
								required: false
							}
						]
					}
				},
				{
					type: 'text',
					name: 'city',
					grid: {
						col: {
							xs: 24,
							sm: 12,
							md: 8
						}
					},
					properties: {
						placeholder: 'City',
						label: {
							name: 'City'
						},
						disabled: false,
						rules: [
							{
								required: false
							}
						]
					}
				},
				{
					type: 'text',
					name: 'accountNumbers',
					grid: {
						col: {
							xs: 24,
							sm: 12,
							md: 8
						}
					},
					properties: {
						placeholder: 'Account Numbers',
						label: {
							name: 'Account Numbers'
						},
						disabled: false,
						rules: [
							{
								required: true
							}
						]
					}
				}
			]
		},
		{
			title: 'Social Security Number',
			grid: {
				row: {
					gutter: 116
				}
			},
			formElements: [
				{
					type: 'textArea',
					name: 'tin',
					grid: {
						col: {
							xs: 24,
							sm: 12,
							md: 8
						}
					},
					properties: {
						placeholder: 'Social Security Number',
						label: {
							name: 'Social Security Number'
						},
						disabled: false,
						maxLength: 10,
						rules: [
							{
								required: true
							}
						]
					}
				},
				{
					type: 'text',
					name: 'employeeIdentificationNumber',
					grid: {
						col: {
							xs: 96,
							sm: 48,
							md: 32
						}
					},
					properties: {
						placeholder: 'Employee Identification Number',
						label: {
							name: 'Employee Identification Number'
						},
						disabled: false,
						rules: [
							{
								required: true
							}
						]
					}
				},
				{
					type: 'text',
					name: 'employeeIdentificationNumber',
					isDependant: true,
					grid: {
						col: {
							xs: 96,
							sm: 48,
							md: 32
						}
					},
					properties: {
						dependant: {
							name: 'showAddress',
							value: 'yes',
							method: 'onChange'
						},
						placeholder: 'Employee Identification Number',
						label: {
							name: 'Employee Identification Number'
						},
						disabled: false,
						isDependant: true,
						rules: [
							{
								required: true
							}
						]
					}
				},
				{
					type: 'text',
					name: 'languages',
					grid: {
						col: {}
					},
					isDependant: true,
					properties: {
						placeholder: 'Add a language',
						label: {
							name: 'Language'
						},
						disabled: false,
						rules: [
							{
								required: true
							}
						],
						dependant: {
							name: 'showAddress',
							value: 'yes',
							method: 'onChange'
						},
						multiple: {
							enabled: true,
							label: 'Add another language'
						}
					}
				},
				{
					type: 'checkbox',
					name: 'disclaimer',
					grid: {
						col: {
							xs: 96,
							sm: 48,
							md: 32
						}
					},
					properties: {
						placeholder: 'Disclaimer',
						label: {
							name: 'Disclaimer'
						},
						options: [
							{
								label:
									'Disclaimer here! Disclaimer here! Disclaimer here! Disclaimer here! Disclaimer here!Disclaimer here!',
								value: 'disclaimer'
							},
							{
								label:
									'Acknowledgement here! Acknowledgement here! Acknowledgement here! Acknowledgement here! Acknowledgement here!',
								value: 'acknowledgment'
							}
						],
						disabled: false,
						rules: [
							{
								required: true
							}
						]
					}
				}
			]
		}
	]
};
export default metadata2;
