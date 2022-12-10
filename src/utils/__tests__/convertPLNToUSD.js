import { convertPLNToUSD } from '../convertPLNtoUSD';

describe('ConvertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });

  it('should return NaN when input is text', () => {
    expect(convertPLNToUSD('1')).toBeNaN();
    expect(convertPLNToUSD('dffsdfdf')).toBeNaN();
    expect(convertPLNToUSD('-20')).toBeNaN();
    expect(convertPLNToUSD('Ala ma kota')).toBeNaN();
  });

  it('should return NaN when input is empty', () => {
    expect(convertPLNToUSD()).toBeNaN();
  });

  it('should return error if input is not text or number', () => {
    expect(convertPLNToUSD(false)).toBe('Error');
    expect(convertPLNToUSD(true)).toBe('Error');
    expect(convertPLNToUSD({})).toBe('Error');
    expect(convertPLNToUSD([])).toBe('Error');
    expect(convertPLNToUSD(null)).toBe('Error');
    expect(convertPLNToUSD(function () {})).toBe('Error');
  });

  it('should return $0.00 when input is negative number', () => {
    expect(convertPLNToUSD(-6)).toBe('$0.00');
    expect(convertPLNToUSD(-23.5)).toBe('$0.00');
    expect(convertPLNToUSD(-1)).toBe('$0.00');
    expect(convertPLNToUSD(-9.99)).toBe('$0.00');
  });
});
