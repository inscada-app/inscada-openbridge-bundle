// Guards patches/@oicl+openbridge-webcomponents+1.0.0.patch: chart legends are written
// with innerHTML, so the helper must emit label/value/unit as text and drop invalid colors.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { generateLegendHTML } from '@oicl/openbridge-webcomponents/dist/charthelpers/legend.js';

const special = `<b>"&'</b>`;
const escaped = '&lt;b&gt;&quot;&amp;&#39;&lt;/b&gt;';

function legend(item) {
  return generateLegendHTML([{ fillStyle: '#ff0000', label: '', value: '', unit: '', ...item }]);
}

test('label, value and unit are HTML-escaped', () => {
  const html = legend({ label: special, value: special, unit: special });
  assert.ok(!html.includes('<b>'), html);
  assert.equal(html.split(escaped).length - 1, 3, html);
});

test('valid colors are kept', () => {
  for (const color of ['#ff0000', 'red', 'rgb(1, 2, 3)', 'rgba(1, 2, 3, 0.5)', 'var(--chart-sector-1)']) {
    assert.ok(legend({ fillStyle: color }).includes(`style="background-color: ${color};"`), color);
  }
});

test('invalid colors are dropped', () => {
  for (const color of ['red; background-image: url(x)', 'red" onclick="x', 'url(x.png)', '</span><b>', '', undefined, {}]) {
    const html = legend({ fillStyle: color });
    assert.ok(!html.includes('style='), String(color));
  }
});

test('browser path defers to CSS.supports', () => {
  const previous = globalThis.CSS;
  globalThis.CSS = { supports: (property, value) => property === 'color' && value === 'teal' };
  try {
    assert.ok(legend({ fillStyle: 'teal' }).includes('background-color: teal;'));
    assert.ok(!legend({ fillStyle: 'red' }).includes('style='));
  } finally {
    globalThis.CSS = previous;
  }
});
