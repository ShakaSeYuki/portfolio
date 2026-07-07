export const getBasePath = (): string => import.meta.env.BASE_URL;

export const getPublicAssetPath = (path: string): string => {
  const normalizedPath = path.replace(/^\/+/, '');
  return `${getBasePath()}${normalizedPath}`;
};
