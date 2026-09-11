// Test harness for AtoIkura in JSC
const window = this;
const document = {
  title: "",
  getElementById: function(id) {
    if (!elements[id]) {
      elements[id] = createElementMock(id);
    }
    return elements[id];
  },
  querySelectorAll: function(sel) {
    return [];
  },
  querySelector: function(sel) {
    return null;
  },
  createElement: function(tag) {
    return createElementMock(tag);
  },
  addEventListener: function(event, cb) {
    if (event === "DOMContentLoaded") {
      domLoadedCallbacks.push(cb);
    }
  },
  documentElement: {
    setAttribute: function() {},
    removeAttribute: function() {},
    style: { setProperty: function() {}, removeProperty: function() {} },
    classList: { add: function() {}, remove: function() {}, toggle: function() {} }
  },
  body: {
    classList: { add: function() {}, remove: function() {}, toggle: function() {} }
  }
};

const localStorage = {
  _data: {},
  getItem: function(k) { return this._data[k] || null; },
  setItem: function(k, v) { this._data[k] = String(v); },
  removeItem: function(k) { delete this._data[k]; },
  clear: function() { this._data = {}; }
};

const elements = {};
const domLoadedCallbacks = [];

function createElementMock(tagOrId) {
  const el = {
    id: tagOrId,
    tagName: (tagOrId || "div").toUpperCase(),
    value: "",
    textContent: "",
    innerHTML: "",
    className: "",
    checked: false,
    children: [],
    style: { display: "", setProperty: function() {}, removeProperty: function() {} },
    dataset: {},
    classList: {
      add: function() {},
      remove: function() {},
      toggle: function() {},
      contains: function() { return false; }
    },
    addEventListener: function() {},
    removeEventListener: function() {},
    append: function(...args) {},
    prepend: function(...args) {},
    appendChild: function(el) { return el; },
    replaceChildren: function(...args) {
      this.innerHTML = "";
    },
    getContext: function() {
      return {};
    },
    setAttribute: function() {},
    getAttribute: function() { return null; },
    focus: function() {},
    reset: function() {},
    showModal: function() {},
    close: function() {}
  };
  el.parentElement = {
    classList: {
      add: function() {},
      remove: function() {},
      toggle: function() {},
      contains: function() { return false; }
    }
  };
  return el;
}

const navigator = {
  serviceWorker: {
    register: function() { return Promise.resolve(); }
  }
};

const location = { reload: function() {} };
const Chart = function() { return { destroy: function() {}, update: function() {} }; };

load("core.js");
print("core.js loaded successfully. AtoIkuraCore:", typeof window.AtoIkuraCore);

load("app.js");
print("app.js loaded successfully. Executing DOMContentLoaded...");

for (const cb of domLoadedCallbacks) {
  cb();
}
print("DOMContentLoaded executed successfully without error!");
