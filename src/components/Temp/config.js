const TYPES = {
  NORMAL: 'NORMAL',
  SMALL: 'SMALL',
  BIG: 'BIG',
  EXTRA_BIG: 'EXTRA_BIG'
}

const SIZES = {
  [TYPES.NORMAL]: '16px',
  [TYPES.SMALL]: '12px',
  [TYPES.BIG]: '24px',
  [TYPES.EXTRA_BIG]: '40px'
}

const RADIUSES = {
  [TYPES.NORMAL]: '20px',
  [TYPES.SMALL]: '20px',
  [TYPES.BIG]: '20px',
  [TYPES.EXTRA_BIG]: '40px'
}

export { TYPES, SIZES, RADIUSES }
