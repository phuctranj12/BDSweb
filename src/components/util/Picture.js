import React from 'react';

/**
 * <picture> wrapper that prefers WebP and falls back to the JPG on browsers
 * that don't support it. Both sources are produced by scripts/optimize-images.sh
 * at identical dimensions, so declaring width/height (or an aspect-ratio in CSS)
 * still guards against layout shift.
 *
 *   import jpg  from '.../web/DuAn2.jpg';
 *   import webp from '.../web/DuAn2.webp';
 *   <Picture webp={webp} jpg={jpg} alt="…" className="hero__img" loading="lazy" />
 *
 * `className` styles the <img> (the element every existing stylesheet already
 * targets); the <picture> is a display:contents pass-through so layout is
 * unchanged. Any extra props (loading, decoding, width, height, onClick…) land
 * on the <img>.
 */
export default function Picture({ webp, jpg, alt, className, pictureClassName, ...imgProps }) {
  return (
    <picture className={pictureClassName ? `u-picture ${pictureClassName}` : 'u-picture'}>
      {webp && <source srcSet={webp} type="image/webp" />}
      <img src={jpg} alt={alt} className={className} {...imgProps} />
    </picture>
  );
}
