export const mainHueOfCategory = (category: string): string => {
  if (category === "BackEnd") {
    return "221";
  } else if (category === "FrontEnd") {
    return "360";
  } else if (category === "Blockchain") {
    return "274";
  } else {
    return "120";
  }
};

export const shuffle = (array: Record<string, string>[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const randomColourPerCategory = (category: string): string => {
  const mainHue = mainHueOfCategory(category);
  const l = Math.floor(Math.random() * (50 - 20 + 1) + 20);
  const s = Math.floor(Math.random() * (80 - 50 + 1) + 50);
  return `hsla(${mainHue}, ${s}%, ${l}%, 0.45)`;
};

export const mainColourOfCategory = (category: string): string => {
  if (category === "BackEnd") {
    return "hsla(221, 80%, 44%, 0.45)";
  } else if (category === "FrontEnd") {
    return "hsla(360, 52%, 50%, 0.45)";
  } else if (category === "Blockchain") {
    return "hsla(274, 63%, 50%, 0.45)";
  } else {
    return "hsla(120, 72%, 45%, 0.45)";
  }
};
