
import { Icon, generic } from "../../index";

/**
 * A component that renders the `heart-circle-minus` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-circle-minus?s=duotone heart-circle-minus}
 * @preview ![heart-circle-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE4NS4xbDAgNS44YzAgNDEuNSAxNy4yIDgxLjIgNDcuNiAxMDkuNUwyMjguMyA0NjkuMWM3LjUgNyAxNy40IDEwLjkgMjcuNyAxMC45czIwLjItMy45IDI3LjctMTAuOWwyLjYtMi40QzI2Ny4yIDQzOC42IDI1NiA0MDQuNiAyNTYgMzY4YzAtOTcuMiA3OC44LTE3NiAxNzYtMTc2YzI4LjMgMCA1NSA2LjcgNzguNyAxOC41Yy45LTYuNSAxLjMtMTMgMS4zLTE5LjZsMC01LjhjMC02OS45LTUwLjUtMTI5LjUtMTE5LjQtMTQxYy03LjgtMS4zLTE1LjctMS45LTIzLjUtMS45QzMzMS41IDQyLjIgMjk1IDU3IDI2OCA4NEwyNTYgOTYgMjQ0IDg0Yy0yNy0yNy02My41LTQxLjktMTAxLjEtNDEuOWMtNy44IDAtMTUuNyAuNi0yMy41IDEuOUM1MC41IDU1LjYgMCAxMTUuMiAwIDE4NS4xeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDMyIDUxMmExNDQgMTQ0IDAgMSAwIDAtMjg4IDE0NCAxNDQgMCAxIDAgMCAyODh6bTY0LTEyOGwtMTI4IDBjLTguOCAwLTE2LTcuMi0xNi0xNnM3LjItMTYgMTYtMTZsMTI4IDBjOC44IDAgMTYgNy4yIDE2IDE2cy03LjIgMTYtMTYgMTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const HeartCircleMinus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 185.1l0 5.8c0 41.5 17.2 81.2 47.6 109.5L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9l2.6-2.4C267.2 438.6 256 404.6 256 368c0-97.2 78.8-176 176-176c28.3 0 55 6.7 78.7 18.5c.9-6.5 1.3-13 1.3-19.6l0-5.8c0-69.9-50.5-129.5-119.4-141c-7.8-1.3-15.7-1.9-23.5-1.9C331.5 42.2 295 57 268 84L256 96 244 84c-27-27-63.5-41.9-101.1-41.9c-7.8 0-15.7 .6-23.5 1.9C50.5 55.6 0 115.2 0 185.1z" />
            <path d="M432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm64-128l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16z" />
    </Icon>
);

export default HeartCircleMinus;