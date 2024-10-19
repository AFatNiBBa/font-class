
import { Icon, generic } from "../../index";

/**
 * A component that renders the `broom` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/broom?s=sharp-duotone-solid broom}
 * @preview ![broom](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMjggMjAwTDUyOCAwbDQ4IDQ4TDM3NiAyNDhsLTQ4LTQ4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDE2IDI4OEwyODggMTYwbC0zMiAwIDAgNTEuN0wzNjQuMyAzMjBsNTEuNyAwIDAtMzJ6bS03NC45IDY1LjRMMjIyLjYgMjM0LjljLTQyLjctMy43LTg1LjIgMTEuNy0xMTUuOCA0Mi4zQzc5LjQgMzA0LjYgNjQgMzQxLjggNjQgMzgwLjVsMCAzLjUgOTYtNDhMMCA0ODBsMCAzMiAxOTUuNSAwYzM4LjggMCA3NS45LTE1LjQgMTAzLjQtNDIuOGMzMC42LTMwLjYgNDUuOS03My4xIDQyLjMtMTE1Ljh6Ii8+PC9zdmc+|width=32|height=32)
 */
const Broom: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M328 200L528 0l48 48L376 248l-48-48z" />
            <path d="M416 288L288 160l-32 0 0 51.7L364.3 320l51.7 0 0-32zm-74.9 65.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3C79.4 304.6 64 341.8 64 380.5l0 3.5 96-48L0 480l0 32 195.5 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" />
    </Icon>
);

export default Broom;