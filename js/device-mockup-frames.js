/**
 * DEVICE MOCKUP FRAME GENERATOR — minimal SVG wireframes (phone, iPad landscape, browser).
 * See repo README / Are.na `frame:` line for portfolio integration.
 */
(function (global) {
  'use strict';

  const STROKE_WIDTH = 1.5;
  const SVG_PAD = 40;

  const DEVICES = {
    phone: {
      screenH: 390,
      screenAR: 440 / 956,
      bezelRatio: 0.065,
      radiusRatio: 0.18
    },
    tablet: {
      screenW: 480,
      screenAR: 1264 / 948,
      bezelRatio: 0.05,
      radiusRatio: 0.08
    },
    browser: {
      screenW: 560,
      screenAR: 1400 / 900,
      chromeRatio: 0.0333,
      deviceR: 6,
      dotSpacingFactor: 2.6
    }
  };

  function fitImage({ imageSrc, imageW, imageH, boxX, boxY, boxW, boxH, clipId }) {
    const iAR = imageW / imageH;
    const bAR = boxW / boxH;
    let iw, ih, ix, iy;
    if (iAR > bAR) {
      iw = boxW;
      ih = boxW / iAR;
      ix = boxX;
      iy = boxY + (boxH - ih) / 2;
    } else {
      ih = boxH;
      iw = boxH * iAR;
      ix = boxX + (boxW - iw) / 2;
      iy = boxY;
    }
    return `<image href="${imageSrc}" x="${ix}" y="${iy}" width="${iw}" height="${ih}" clip-path="url(#${clipId})" preserveAspectRatio="xMidYMid meet"/>`;
  }

  function renderPhone({ imageSrc, imageW, imageH, stroke, clipId }) {
    const cfg = DEVICES.phone;
    const lw = STROKE_WIDTH;
    const screenH = cfg.screenH;
    const screenW = Math.round(screenH * cfg.screenAR);
    const shorter = Math.min(screenW, screenH);
    const bezel = Math.round(shorter * cfg.bezelRatio);
    const deviceR = Math.round(shorter * cfg.radiusRatio);
    const screenR = Math.max(deviceR - bezel, 2);
    const deviceW = screenW + bezel * 2;
    const deviceH = screenH + bezel * 2;
    const svgW = deviceW + SVG_PAD * 2;
    const svgH = deviceH + SVG_PAD * 2;
    const devX = SVG_PAD;
    const devY = SVG_PAD;
    const screenX = devX + bezel;
    const screenY = devY + bezel;
    const camR = Math.max(Math.round(bezel * 0.18), 2);
    const camCX = devX + deviceW / 2;
    const camCY = devY + bezel / 2;
    const imgEl = imageSrc ? fitImage({ imageSrc, imageW, imageH, boxX: screenX, boxY: screenY, boxW: screenW, boxH: screenH, clipId }) : '';
    return `<svg width="100%" viewBox="0 0 ${svgW} ${svgH}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="${clipId}">
      <rect x="${screenX}" y="${screenY}" width="${screenW}" height="${screenH}" rx="${screenR}"/>
    </clipPath>
  </defs>
  ${imgEl}
  <rect x="${screenX}" y="${screenY}" width="${screenW}" height="${screenH}"
        rx="${screenR}" fill="none" stroke="${stroke}" stroke-width="${lw}"/>
  <rect x="${devX}" y="${devY}" width="${deviceW}" height="${deviceH}"
        rx="${deviceR}" fill="none" stroke="${stroke}" stroke-width="${lw}"/>
  <circle cx="${camCX}" cy="${camCY}" r="${camR}" fill="${stroke}"/>
</svg>`;
  }

  function renderTablet({ imageSrc, imageW, imageH, stroke, clipId }) {
    const cfg = DEVICES.tablet;
    const lw = STROKE_WIDTH;
    const screenW = cfg.screenW;
    const screenH = Math.round(screenW / cfg.screenAR);
    const shorter = Math.min(screenW, screenH);
    const bezel = Math.round(shorter * cfg.bezelRatio);
    const deviceR = Math.round(shorter * cfg.radiusRatio);
    const screenR = Math.max(deviceR - bezel, 2);
    const deviceW = screenW + bezel * 2;
    const deviceH = screenH + bezel * 2;
    const svgW = deviceW + SVG_PAD * 2;
    const svgH = deviceH + SVG_PAD * 2;
    const devX = SVG_PAD;
    const devY = SVG_PAD;
    const screenX = devX + bezel;
    const screenY = devY + bezel;
    const camR = Math.max(Math.round(bezel * 0.18), 2);
    const camCX = devX + deviceW / 2;
    const camCY = devY + bezel / 2;
    const imgEl = imageSrc ? fitImage({ imageSrc, imageW, imageH, boxX: screenX, boxY: screenY, boxW: screenW, boxH: screenH, clipId }) : '';
    return `<svg width="100%" viewBox="0 0 ${svgW} ${svgH}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="${clipId}">
      <rect x="${screenX}" y="${screenY}" width="${screenW}" height="${screenH}" rx="${screenR}"/>
    </clipPath>
  </defs>
  ${imgEl}
  <rect x="${screenX}" y="${screenY}" width="${screenW}" height="${screenH}"
        rx="${screenR}" fill="none" stroke="${stroke}" stroke-width="${lw}"/>
  <rect x="${devX}" y="${devY}" width="${deviceW}" height="${deviceH}"
        rx="${deviceR}" fill="none" stroke="${stroke}" stroke-width="${lw}"/>
  <circle cx="${camCX}" cy="${camCY}" r="${camR}" fill="${stroke}"/>
</svg>`;
  }

  function renderBrowser({ imageSrc, imageW, imageH, url, stroke, clipId }) {
    const cfg = DEVICES.browser;
    const lw = STROKE_WIDTH;
    const screenW = cfg.screenW;
    const chromeH = Math.round(screenW * cfg.chromeRatio);
    const screenH = imageSrc
      ? Math.round(screenW * (imageH / imageW))
      : Math.round(screenW / cfg.screenAR);
    const r = cfg.deviceR;
    const devW = screenW;
    const devH = screenH + chromeH;
    const svgW = devW + SVG_PAD * 2;
    const svgH = devH + SVG_PAD * 2;
    const devX = SVG_PAD;
    const devY = SVG_PAD;
    const screenX = devX;
    const screenY = devY + chromeH;
    const dotY = devY + chromeH / 2;
    const dotR = Math.max(chromeH * 0.13, 1.5);
    const dotSpacing = dotR * cfg.dotSpacingFactor;
    const dotsStartX = devX + chromeH * 0.55;
    const dots = [0, 1, 2].map(i =>
      `<circle cx="${dotsStartX + i * dotSpacing}" cy="${dotY}" r="${dotR}" fill="${stroke}"/>`
    ).join('\n  ');
    const urlH = chromeH * 0.58;
    const urlW = devW * 0.32;
    const urlX = devX + (devW - urlW) / 2;
    const urlY = devY + (chromeH - urlH) / 2;
    const urlR = urlH / 2;
    const urlSize = Math.max(Math.round(chromeH * 0.38), 7);
    const urlSafe = (url || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const imgEl = imageSrc
      ? `<image href="${imageSrc}" x="${screenX}" y="${screenY}" width="${screenW}" height="${screenH}" clip-path="url(#${clipId})" preserveAspectRatio="xMidYMid slice"/>`
      : '';
    const br = Math.min(r, Math.floor(Math.min(screenW, screenH) / 2));
    const clipD =
      `M ${screenX} ${screenY} L ${screenX + screenW} ${screenY} L ${screenX + screenW} ${screenY + screenH - br} ` +
      `A ${br} ${br} 0 0 1 ${screenX + screenW - br} ${screenY + screenH} L ${screenX + br} ${screenY + screenH} ` +
      `A ${br} ${br} 0 0 1 ${screenX} ${screenY + screenH - br} L ${screenX} ${screenY} Z`;
    return `<svg width="100%" viewBox="0 0 ${svgW} ${svgH}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="${clipId}">
      <path d="${clipD}"/>
    </clipPath>
  </defs>
  ${imgEl}
  <rect x="${devX}" y="${devY}" width="${devW}" height="${devH}"
        rx="${r}" fill="none" stroke="${stroke}" stroke-width="${lw}"/>
  <line x1="${devX}" y1="${devY + chromeH}" x2="${devX + devW}" y2="${devY + chromeH}"
        stroke="${stroke}" stroke-width="${lw}"/>
  ${dots}
  <rect x="${urlX}" y="${urlY}" width="${urlW}" height="${urlH}"
        rx="${urlR}" fill="none" stroke="${stroke}" stroke-width="${lw}"/>
  <text x="${urlX + urlW / 2}" y="${urlY + urlH / 2}"
        text-anchor="middle" dominant-baseline="central"
        font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        font-size="${urlSize}" fill="${stroke}">${urlSafe}</text>
</svg>`;
  }

  function generateFrame(options) {
    const device = options.device;
    const clipId = (options.clipId || 'mf-' + Math.random().toString(36).slice(2, 10)).replace(/[^a-zA-Z0-9_-]/g, '');
    const stroke = options.stroke != null ? options.stroke : '#111111';
    const { imageSrc, imageW, imageH, url } = options;
    switch (device) {
      case 'phone':
        return renderPhone({ imageSrc, imageW, imageH, stroke, clipId });
      case 'tablet':
        return renderTablet({ imageSrc, imageW, imageH, stroke, clipId });
      case 'browser':
        return renderBrowser({ imageSrc, imageW, imageH, url: options.url, stroke, clipId });
      default:
        throw new Error('Unknown device: "' + device + '". Use phone, tablet, or browser.');
    }
  }

  global.generateDeviceMockupFrame = generateFrame;
  global.DeviceMockupFrames = { generateFrame, DEVICES, STROKE_WIDTH };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { generateFrame, DEVICES, STROKE_WIDTH };
  }
})(typeof window !== 'undefined' ? window : globalThis);
