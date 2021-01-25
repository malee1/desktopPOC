import { panelOneLabels, panelTwoLabels, panelThreeLabels } from '../../constants/panelLabels';

const panelOneTestLabels = {
  name: 'Name: ',
  dob: 'Date of Birth: ',
  uRef: 'Unique Reference: ',
  tel: 'Tel: '
};

const panelTwoTestLabels = {
  time: 'Time Waiting: ',
  context: 'Context: ',
  rec: 'Recording: ',
  info: 'Call Info: '
};

const panelThreeTestLabels = {
  alerts: 'Customer Alerts: ',
  service: 'Service Alerts: ',
  keyInfo: 'Key Info: ',
  auth: 'Authorisation'
};

describe('panel one labels to be correct', () => {
  it('contains four values', () => {
    const number = Object.keys(panelOneLabels).length;
    expect(number).toBe(4);
    expect(panelOneLabels.name).toBe(panelOneTestLabels.name);
    expect(panelOneLabels.dob).toBe(panelOneTestLabels.dob);
    expect(panelOneLabels.uRef).toBe(panelOneTestLabels.uRef);
    expect(panelOneLabels.tel).toBe(panelOneTestLabels.tel);
  });
});

describe('panel two labels to be correct', () => {
  it('contains four values', () => {
    const number = Object.keys(panelTwoLabels).length;
    expect(number).toBe(4);
    expect(panelTwoLabels.name).toBe(panelTwoTestLabels.name);
    expect(panelTwoLabels.dob).toBe(panelTwoTestLabels.dob);
    expect(panelTwoLabels.uRef).toBe(panelTwoTestLabels.uRef);
    expect(panelTwoLabels.tel).toBe(panelTwoTestLabels.tel);
  });
});

describe('panel three labels to be correct', () => {
  it('contains four values', () => {
    const number = Object.keys(panelThreeLabels).length;
    expect(number).toBe(4);
    expect(panelThreeLabels.name).toBe(panelThreeTestLabels.name);
    expect(panelThreeLabels.dob).toBe(panelThreeTestLabels.dob);
    expect(panelThreeLabels.uRef).toBe(panelThreeTestLabels.uRef);
    expect(panelThreeLabels.tel).toBe(panelThreeTestLabels.tel);
  });
});
