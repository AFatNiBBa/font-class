
import { Icon, generic } from "../../index";

/**
 * A component that renders the `faucet` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/faucet?s=sharp-duotone-solid faucet}
 * @preview ![faucet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NkwwIDM4NGwxMzIuMSAwYzIwLjIgMjkgNTMuOSA0OCA5MS45IDQ4czcxLjctMTkgOTEuOS00OGwzNi4xIDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJsMCAzMiAxMjggMCAwLTMyYzAtODguNC03MS42LTE2MC0xNjAtMTYwbC0zMiAwLTMyLTMyLTMyIDAgMC03Ni44TDIyNCAxNDRsLTMyIDMuMiAwIDc2LjgtMzIgMC0zMiAzMkwwIDI1NnpNMTkyIDY0bDAgNDQuOCAzMiAzLjIgMzItMy4yTDI1NiA2NGwtNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTY0IDE2MGwxNjAtMTYgMTYwIDE2Vjk2TDIyNCAxMTIgNjQgOTZ2NjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Faucet: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256L0 384l132.1 0c20.2 29 53.9 48 91.9 48s71.7-19 91.9-48l36.1 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-88.4-71.6-160-160-160l-32 0-32-32-32 0 0-76.8L224 144l-32 3.2 0 76.8-32 0-32 32L0 256zM192 64l0 44.8 32 3.2 32-3.2L256 64l-64 0z" />
            <path d="M64 160l160-16 160 16V96L224 112 64 96v64z" />
    </Icon>
);

export default Faucet;