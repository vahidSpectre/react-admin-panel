export const emptyToNull = value => {
 if (value === '') return null;
 if (Array.isArray(value) && value.length === 0) return null;
 return value;
};
