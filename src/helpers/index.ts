export const generateUUIDv4 = (): string => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    (placeholder) => {
      const randomNumber: number = (Math.random() * 16) | 0;
      const hexDigit: string =
        placeholder === "x"
          ? randomNumber.toString(16)
          : ((randomNumber & 0x3) | 0x8).toString(16);
      return hexDigit;
    },
  );
};
