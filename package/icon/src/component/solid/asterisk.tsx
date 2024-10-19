
import { Icon } from "../../index";

/**
 * A component that renders the `asterisk` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/asterisk?s=solid asterisk}
 * @preview ![asterisk](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTkyIDMyYzE3LjcgMCAzMiAxNC4zIDMyIDMybDAgMTM1LjUgMTExLjUtNjYuOWMxNS4yLTkuMSAzNC44LTQuMiA0My45IDExczQuMiAzNC44LTExIDQzLjlMMjU0LjIgMjU2bDExNC4zIDY4LjZjMTUuMiA5LjEgMjAuMSAyOC43IDExIDQzLjlzLTI4LjcgMjAuMS00My45IDExTDIyNCAzMTIuNSAyMjQgNDQ4YzAgMTcuNy0xNC4zIDMyLTMyIDMycy0zMi0xNC4zLTMyLTMybDAtMTM1LjVMNDguNSAzNzkuNGMtMTUuMiA5LjEtMzQuOCA0LjItNDMuOS0xMXMtNC4yLTM0LjggMTEtNDMuOUwxMjkuOCAyNTYgMTUuNSAxODcuNGMtMTUuMi05LjEtMjAuMS0yOC43LTExLTQzLjlzMjguNy0yMC4xIDQzLjktMTFMMTYwIDE5OS41IDE2MCA2NGMwLTE3LjcgMTQuMy0zMiAzMi0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Asterisk: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 32c17.7 0 32 14.3 32 32l0 135.5 111.5-66.9c15.2-9.1 34.8-4.2 43.9 11s4.2 34.8-11 43.9L254.2 256l114.3 68.6c15.2 9.1 20.1 28.7 11 43.9s-28.7 20.1-43.9 11L224 312.5 224 448c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-135.5L48.5 379.4c-15.2 9.1-34.8 4.2-43.9-11s-4.2-34.8 11-43.9L129.8 256 15.5 187.4c-15.2-9.1-20.1-28.7-11-43.9s28.7-20.1 43.9-11L160 199.5 160 64c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default Asterisk;