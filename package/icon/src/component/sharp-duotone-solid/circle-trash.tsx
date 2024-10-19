
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-trash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-trash?s=sharp-duotone-solid circle-trash}
 * @preview ![circle-trash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6TTE0NCAxMjhsMTYgMCA0MS40IDAgMTEuMy0xMS4zIDQuNy00LjcgNi42IDAgNjQgMCA2LjYgMCA0LjcgNC43TDMxMC42IDEyOGw0MS40IDAgMTYgMCAwIDMyLTE2IDAtMTkyIDAtMTYgMCAwLTMyem0xNiA2NGwxOTIgMEwzMzYgMzg0bC0xNjAgMEwxNjAgMTkyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjE3LjQgMTEybC00LjcgNC43TDIwMS40IDEyOCAxNjAgMTI4bC0xNiAwIDAgMzIgMTYgMCAxOTIgMCAxNiAwIDAtMzItMTYgMC00MS40IDAtMTEuMy0xMS4zLTQuNy00LjctNi42IDAtNjQgMC02LjYgMHpNMTYwIDE5MmwxNiAxOTIgMTYwIDAgMTYtMTkyLTE5MiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleTrash: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM144 128l16 0 41.4 0 11.3-11.3 4.7-4.7 6.6 0 64 0 6.6 0 4.7 4.7L310.6 128l41.4 0 16 0 0 32-16 0-192 0-16 0 0-32zm16 64l192 0L336 384l-160 0L160 192z" />
            <path d="M217.4 112l-4.7 4.7L201.4 128 160 128l-16 0 0 32 16 0 192 0 16 0 0-32-16 0-41.4 0-11.3-11.3-4.7-4.7-6.6 0-64 0-6.6 0zM160 192l16 192 160 0 16-192-192 0z" />
    </Icon>
);

export default CircleTrash;