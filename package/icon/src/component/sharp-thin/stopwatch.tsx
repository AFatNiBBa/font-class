
import { Icon } from "../../index";

/**
 * A component that renders the `stopwatch` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stopwatch?s=sharp-thin stopwatch}
 * @preview ![stopwatch](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTQ0IDBMMzA0IDBsMCAxNi03MiAwIDAgODAuMmM1NS40IDIuMSAxMDUuMyAyNS45IDE0MS40IDYzLjFsMzYuOS0zNi45IDUuNy01LjdMNDI3LjMgMTI4bC01LjcgNS43LTM3LjYgMzcuNkM0MTQgMjA3LjIgNDMyIDI1My41IDQzMiAzMDRjMCAxMTQuOS05My4xIDIwOC0yMDggMjA4UzE2IDQxOC45IDE2IDMwNGMwLTExMi4yIDg4LjgtMjAzLjYgMjAwLTIwNy44TDIxNiAxNmwtNzIgMCAwLTE2em04MCA0OTZhMTkyIDE5MiAwIDEgMCAwLTM4NCAxOTIgMTkyIDAgMSAwIDAgMzg0em04LTMxMmwwIDEzNiAwIDgtMTYgMCAwLTggMC0xMzYgMC04IDE2IDAgMCA4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Stopwatch: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M144 0L304 0l0 16-72 0 0 80.2c55.4 2.1 105.3 25.9 141.4 63.1l36.9-36.9 5.7-5.7L427.3 128l-5.7 5.7-37.6 37.6C414 207.2 432 253.5 432 304c0 114.9-93.1 208-208 208S16 418.9 16 304c0-112.2 88.8-203.6 200-207.8L216 16l-72 0 0-16zm80 496a192 192 0 1 0 0-384 192 192 0 1 0 0 384zm8-312l0 136 0 8-16 0 0-8 0-136 0-8 16 0 0 8z" />
    </Icon>
);

export default Stopwatch;