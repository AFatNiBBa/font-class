
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lamp-street` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lamp-street?s=sharp-duotone-solid lamp-street}
 * @preview ![lamp-street](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE3NkwwIDUxMmw2NCAwIDAtMzM2YzAtNjEuOSA1MC4xLTExMiAxMTItMTEyczExMiA1MC4xIDExMiAxMTJsMCAxOC43YzEwLjQtMS43IDIxLjEtMi43IDMyLTIuN2MxLjQgMCAyLjcgMCA0LjEgMHMyLjcgLjEgNC4xIC4xYzIuNyAuMSA1LjQgLjMgOC4xIC41YzUuMyAuNCAxMC42IDEuMSAxNS44IDJsMC0xOC43QzM1MiA3OC44IDI3My4yIDAgMTc2IDBTMCA3OC44IDAgMTc2ek0yNTYgMzg0YzAgMzUuMyAyOC43IDY0IDY0IDY0czY0LTI4LjcgNjQtNjRsLTEyOCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzIwIDE5MmMtMTA2IDAtMTkyIDg2LTE5MiAxOTJINTEyYzAtMTA2LTg2LTE5Mi0xOTItMTkyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const LampStreet: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 176L0 512l64 0 0-336c0-61.9 50.1-112 112-112s112 50.1 112 112l0 18.7c10.4-1.7 21.1-2.7 32-2.7c1.4 0 2.7 0 4.1 0s2.7 .1 4.1 .1c2.7 .1 5.4 .3 8.1 .5c5.3 .4 10.6 1.1 15.8 2l0-18.7C352 78.8 273.2 0 176 0S0 78.8 0 176zM256 384c0 35.3 28.7 64 64 64s64-28.7 64-64l-128 0z" />
            <path d="M320 192c-106 0-192 86-192 192H512c0-106-86-192-192-192z" />
    </Icon>
);

export default LampStreet;