
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tape` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tape?s=sharp-duotone-solid tape}
 * @preview ![tape](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAyNTZhMTYwIDE2MCAwIDEgMCAzMjAgMEExNjAgMTYwIDAgMSAwIDY0IDI1NnptMjI0IDBhNjQgNjQgMCAxIDEgLTEyOCAwIDY0IDY0IDAgMSAxIDEyOCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNjQgMjU2YTE2MCAxNjAgMCAxIDEgMzIwIDBBMTYwIDE2MCAwIDEgMSA2NCAyNTZ6TTM4MC44IDQxNmM0MS41LTQwLjcgNjcuMi05Ny4zIDY3LjItMTYwQzQ0OCAxMzIuMyAzNDcuNyAzMiAyMjQgMzJTMCAxMzIuMyAwIDI1NlMxMDAuMyA0ODAgMjI0IDQ4MGwzMjAgMCAzMiAwIDAtNjQtMzIgMC0xNjMuMiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Tape: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 256a160 160 0 1 0 320 0A160 160 0 1 0 64 256zm224 0a64 64 0 1 1 -128 0 64 64 0 1 1 128 0z" />
            <path d="M64 256a160 160 0 1 1 320 0A160 160 0 1 1 64 256zM380.8 416c41.5-40.7 67.2-97.3 67.2-160C448 132.3 347.7 32 224 32S0 132.3 0 256S100.3 480 224 480l320 0 32 0 0-64-32 0-163.2 0z" />
    </Icon>
);

export default Tape;