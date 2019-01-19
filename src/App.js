import React, { Component } from 'react';
import DropDown from './lib';

var applyFilter = {
	backgroundColor: '#76d0eb',
	textAlign: 'center',
	color: '#ffffff',
	cursor: 'pointer',
	maxWidth: '85%',
	marginLeft: '7.5%',
	marginBottom: '20px',
	fontSize: '16px',
	borderRadius: '4px',
	userSelect: 'none'
};
class App extends Component {
	render() {
		return (
			<div>
				<div className='dp-container' style={{ margin: '20px 40px' }}>
					{/* Simple Drop Down */}
					<div className='simpleDropdown' style={{ display: 'flex' }}>
						<div>
							<h3>A Simple Drop down</h3>
							<DropDown option={InputSample.simpleDropDown} onSelect={(a, b) => console.log(a)} />
						</div>
						<div style={{ paddingLeft: '40px' }}>
							<h3>A Simple Drop down With Tick sign</h3>
							<DropDown option={InputSample.simpleDropDown} tickRequiredForSingleSelect={true} />
						</div>
						<div style={{ paddingLeft: '40px' }}>
							<h3>A Simple Drop down With Radio Btn</h3>
							<DropDown option={InputSample.simpleDropDown} shouldUseRadioBtn={true} />
						</div>
					</div>
					{/*
					 ******** Multi Selected Drop Down ******
					 */}
					<div className='multi-selected' style={{ display: 'flex', marginTop: '75px' }}>
						<div>
							<h3>A Multi Selected Drop Down</h3>
							<DropDown
								option={InputSample.simpleDropDown}
								multiSelect={true}
								onSelect={(a, b) => console.log(a)}
							/>
						</div>
						<div style={{ paddingLeft: '40px' }}>
							<h3>A Multi Selected Drop Down With Custom Header</h3>
							<DropDown
								option={InputSample.simpleDropDown}
								multiSelect={true}
								onMultiSelect={(label, SelectedObj) => {
									console.log('label ', label, ' SelectedObj ', SelectedObj);
								}}
								multiselectHeaderLabel={'Header 1'}
								multiSelectHeaderClearAllLabel={'header 2'}
							/>
						</div>
					</div>
					{/* Grouping in  Drop Down */}
					<div className='multi-selected-grouping' style={{ display: 'flex', marginTop: '75px' }}>
						<div>
							<h3>Drop Down With Grouping</h3>
							<DropDown
								option={InputSample.groupingDropDown}
								onSelect={selectedObj => {
									console.log('On select ', selectedObj);
								}}
							/>
						</div>
						<div style={{ paddingLeft: '40px' }}>
							<h3>Multi Select Drop Down With Grouping and Custom Apply Btn</h3>
							<DropDown
								ref={this.child}
								option={InputSample.groupingDropDown}
								multiSelect={true}
								isRequiredDefaultMultiselectDesign={false}
								multiselectHeaderRenderer={() => <div />}
								onSelect={selectedObj => {
									console.log('On select ', selectedObj);
								}}
								multiselectBtnClass={'apply-btn'} // 'apply-btn' already defined in the 'SmartUpload' component
								multiselectBtnLabel={'Apply Filter'}
								multiselectBtnRenderer={() => (
									<div onClick={() => this.child.current.onMultiSelectDone()} style={applyFilter}>
										Apply Filter
									</div>
								)}
							/>
						</div>
					</div>
					{/* Accept Only One on Grouping */}
					<div className='multi-selected-grouping-accept-one' style={{ display: 'flex', marginTop: '75px' }}>
						<div>
							<h3>Grouping With Accept Only One</h3>
							<DropDown
								ref={this.child}
								option={InputSample.groupingAcceptOnlyOne}
								multiSelect={true}
								isRequiredDefaultMultiselectDesign={false}
								shouldAcceptOneFromGroup
								onOpenOption={() => console.log('On open')}
								onCloseOption={() => console.log('on Close')}
							/>
						</div>
						{/* <div style={{ paddingLeft: '40px' }}>
							<h3>Grouping With Accept Only One and Accept Multiple</h3>
							<DropDown
								ref={this.child}
								option={InputSample.groupingAcceptOne_Multiple}
								multiSelect={true}
								onMultiSelect={(label, SelectedObj) => {
									console.log('label ', label, ' SelectedObj ', SelectedObj);
								}}
								onMultiSelectDone={data => console.log('data', data)}
								multiselectBtnRenderer={() => (
									<div onClick={() => this.child.current.onMultiSelectDone()} style={applyFilter}>
										Apply Filter
									</div>
								)}
							/>
						</div> */}
					</div>
				</div>
			</div>
		);
	}
}
var InputSample = {
	simpleDropDown: [
		{ label: 'MicroSoft Word', value: 'Microsoft Word', subMenu: [{ label: 'sdsd', value: 'sdsdd' }] },
		{ label: 'PageMaker', value: 'PageMaker' },
		{ label: 'Different', value: 'Different' }
	],
	groupingDropDown: [
		{
			title: 'SORT BY',
			data: [
				{ label: 'Latest First', value: 'Latest First', disabled: true },
				{ label: 'Oldest Frist', value: 'Oldest Frist' },
				{ label: 'Different', value: 'Different' }
			]
		},
		{
			title: 'Timeframe filter',
			data: [
				{ label: 'Today', value: 'Today', disabled: true },
				{ label: 'Yesterday', value: 'Yesterday' },
				{ label: 'This week', value: 'This week' }
			]
		}
	],
	groupingAcceptOnlyOne: [
		{
			title: 'SORT BY',
			data: [
				{ label: 'Latest First', value: 'Latest First' },
				{ label: 'Oldest Frist', value: 'Oldest Frist' },
				{ label: 'Different', value: 'Different' }
			]
		},
		{
			title: 'Timeframe filter',
			data: [
				{ label: 'Today', value: 'Today' },
				{ label: 'Yesterday', value: 'Yesterday' },
				{ label: 'This week', value: 'This week' }
			]
		}
	],
	groupingAcceptOne_Multiple: [
		{
			title: 'SORT BY',
			data: [
				{ label: 'Latest First', value: 'Latest First', disabled: true },
				{ label: 'Oldest Frist', value: 'Oldest Frist' },
				{ label: 'Different', value: 'Different' }
			]
		},
		{
			title: 'Timeframe filter',
			data: [
				{ label: 'Today', value: 'Today' },
				{ label: 'Yesterday', value: 'Yesterday' },
				{ label: 'This week', value: 'This week' }
			]
		}
	]
};
export default App;
