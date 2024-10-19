
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ellipsis-stroke` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis-stroke?s=duotone ellipsis-stroke}
 * @preview ![ellipsis-stroke](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xODQgMjU2YTcyIDcyIDAgMSAwIDE0NCAwIDcyIDcyIDAgMSAwIC0xNDQgMHptOTYgMGEyNCAyNCAwIDEgMSAtNDggMCAyNCAyNCAwIDEgMSA0OCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzkyIDI1NmEyNCAyNCAwIDEgMCA0OCAwIDI0IDI0IDAgMSAwIC00OCAwem05NiAwYTcyIDcyIDAgMSAxIC0xNDQgMCA3MiA3MiAwIDEgMSAxNDQgMHpNNzIgMjU2YTI0IDI0IDAgMSAwIDQ4IDAgMjQgMjQgMCAxIDAgLTQ4IDB6bTk2IDBBNzIgNzIgMCAxIDEgMjQgMjU2YTcyIDcyIDAgMSAxIDE0NCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const EllipsisStroke: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M184 256a72 72 0 1 0 144 0 72 72 0 1 0 -144 0zm96 0a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
            <path d="M392 256a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm96 0a72 72 0 1 1 -144 0 72 72 0 1 1 144 0zM72 256a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm96 0A72 72 0 1 1 24 256a72 72 0 1 1 144 0z" />
    </Icon>
);

export default EllipsisStroke;