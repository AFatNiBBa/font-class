
import { Icon } from "../../index";

/**
 * A component that renders the `helicopter` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/helicopter?s=sharp-thin helicopter}
 * @preview ![helicopter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTM2IDBsLTggMCAwIDE2IDggMCAyMTYgMCAwIDEyOC0yMTkuNSAwTDg2LjkgNjcuOSA4NC41IDY0IDgwIDY0IDE2IDY0IDUuOCA2NGwyLjUgOS45IDMyIDEyOCAuOSAzLjggMy42IDEuNiAxNDIuNCA2My4zTDI5OCAzOTcuM2wyLjQgMi43IDMuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjUgMCAuNiAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNiAwIC41IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCA4IDAgMC04IDAtMTEyYzAtNzUuMS02MC45LTEzNi0xMzYtMTM2bC03MiAwIDAtMTI4IDIwMCAwIDggMCAwLTE2LTggMEwxMzYgMHpNMjYuMiA4MGw0OS4yIDAgNDUuNyA3Ni4xIDIuMyAzLjkgNC41IDAgMjI0IDAgMCAyMjQtLjIgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNiAwLS41IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjQgMEwxOTggMjU4LjdsLTEuMi0xLjMtMS42LS43TDU0LjggMTk0LjMgMjYuMiA4MHpNMzY4LjQgMzg0bC0uNCAwIDAtMjI0IDcyIDBjNjYuMyAwIDEyMCA1My43IDEyMCAxMjBsMCAxMDRzMCAwIDAgMGwtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS41IDAtLjYgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMHpNNjQwIDQ1NmwwLTgtMTYgMCAwIDggMCA0MC0zOTIgMC04IDAgMCAxNiA4IDAgNDAwIDAgOCAwIDAtOCAwLTQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Helicopter: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M136 0l-8 0 0 16 8 0 216 0 0 128-219.5 0L86.9 67.9 84.5 64 80 64 16 64 5.8 64l2.5 9.9 32 128 .9 3.8 3.6 1.6 142.4 63.3L298 397.3l2.4 2.7 3.6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .5 0 .6 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .6 0 .5 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 8 0 0-8 0-112c0-75.1-60.9-136-136-136l-72 0 0-128 200 0 8 0 0-16-8 0L136 0zM26.2 80l49.2 0 45.7 76.1 2.3 3.9 4.5 0 224 0 0 224-.2 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.6 0-.5 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.4 0L198 258.7l-1.2-1.3-1.6-.7L54.8 194.3 26.2 80zM368.4 384l-.4 0 0-224 72 0c66.3 0 120 53.7 120 120l0 104s0 0 0 0l-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.5 0-.6 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0zM640 456l0-8-16 0 0 8 0 40-392 0-8 0 0 16 8 0 400 0 8 0 0-8 0-48z" />
    </Icon>
);

export default Helicopter;