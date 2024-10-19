
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pipe-valve` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe-valve?s=sharp-duotone-solid pipe-valve}
 * @preview ![pipe-valve](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAxOTJsMCAyNTYgMzg0IDAgMC0yNTYtMTYwIDAgMC03Ni44TDI1NiAxMTJsLTMyIDMuMiAwIDc2LjhMNjQgMTkyek0yMjQgNjRsMCAxMi44TDI1NiA4MGwzMi0zLjJMMjg4IDY0YzAtMTcuNy0xNC4zLTMyLTMyLTMycy0zMiAxNC4zLTMyIDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNOTYgMTI4bDE2MC0xNiAxNjAgMTYgMC02NEwyNTYgODAgOTYgNjRsMCA2NHpNNjQgMTYwTDAgMTYwbDAgMzJMMCA0NDhsMCAzMiA2NCAwIDAtMzIgMC0yNTYgMC0zMnptNDQ4IDMybDAtMzItNjQgMCAwIDMyIDAgMjU2IDAgMzIgNjQgMCAwLTMyIDAtMjU2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const PipeValve: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 192l0 256 384 0 0-256-160 0 0-76.8L256 112l-32 3.2 0 76.8L64 192zM224 64l0 12.8L256 80l32-3.2L288 64c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
            <path d="M96 128l160-16 160 16 0-64L256 80 96 64l0 64zM64 160L0 160l0 32L0 448l0 32 64 0 0-32 0-256 0-32zm448 32l0-32-64 0 0 32 0 256 0 32 64 0 0-32 0-256z" />
    </Icon>
);

export default PipeValve;