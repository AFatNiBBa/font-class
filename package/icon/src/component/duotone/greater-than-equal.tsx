
import { Icon, generic } from "../../index";

/**
 * A component that renders the `greater-than-equal` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/greater-than-equal?s=duotone greater-than-equal}
 * @preview ![greater-than-equal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zNC4zIDUyLjFjNi42LTE2LjQgMjUuMi0yNC40IDQxLjYtMTcuOGwzMjAgMTI4QzQwOCAxNjcuMSA0MTYgMTc4LjkgNDE2IDE5MnMtOCAyNC45LTIwLjEgMjkuN2wtMzIwIDEyOGMtMTYuNCA2LjYtMzUtMS40LTQxLjYtMTcuOHMxLjQtMzUgMTcuOC00MS42TDI5Ny44IDE5MiA1Mi4xIDkzLjdDMzUuNyA4Ny4xIDI3LjcgNjguNSAzNC4zIDUyLjF6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00NDggNDQ4YzAtMTcuNy0xNC4zLTMyLTMyLTMyTDMyIDQxNmMtMTcuNyAwLTMyIDE0LjMtMzIgMzJzMTQuMyAzMiAzMiAzMmwzODQgMGMxNy43IDAgMzItMTQuMyAzMi0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const GreaterThanEqual: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M34.3 52.1c6.6-16.4 25.2-24.4 41.6-17.8l320 128C408 167.1 416 178.9 416 192s-8 24.9-20.1 29.7l-320 128c-16.4 6.6-35-1.4-41.6-17.8s1.4-35 17.8-41.6L297.8 192 52.1 93.7C35.7 87.1 27.7 68.5 34.3 52.1z" />
            <path d="M448 448c0-17.7-14.3-32-32-32L32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32z" />
    </Icon>
);

export default GreaterThanEqual;