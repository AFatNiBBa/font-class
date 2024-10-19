
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-graduate` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-graduate?s=sharp-duotone-solid user-graduate}
 * @preview ![user-graduate](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAxNDRsMjU2IDAgMCAxNmMwIDcwLjctNTcuMyAxMjgtMTI4IDEyOHMtMTI4LTU3LjMtMTI4LTEyOGwwLTE2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDQ4IDQ4TDIyNCAwIDAgNDggMCA4MGwxNiAzLjRMMTYgMTY4IDAgMjU2bDY0IDBMNDggMTY4bDAtNzcuNyA0OCAxMC4zTDk2IDE0NGwyNTYgMCAwLTQzLjRMNDQ4IDgwbDAtMzJ6TTEyNi4xIDMyMEw2NCAzMjAgMCA1MTJsNDQ4IDBMMzg0IDMyMGwtNjIuMSAwTDIyNCA0MjQgMTI2LjEgMzIweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const UserGraduate: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 144l256 0 0 16c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-16z" />
            <path d="M448 48L224 0 0 48 0 80l16 3.4L16 168 0 256l64 0L48 168l0-77.7 48 10.3L96 144l256 0 0-43.4L448 80l0-32zM126.1 320L64 320 0 512l448 0L384 320l-62.1 0L224 424 126.1 320z" />
    </Icon>
);

export default UserGraduate;