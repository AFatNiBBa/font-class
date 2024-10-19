
import { Icon, generic } from "../../index";

/**
 * A component that renders the `accent-grave` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/accent-grave?s=duotone accent-grave}
 * @preview ![accent-grave](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMDguMyAyMDQuOEw0MS4yIDk1Yy02LTkuOC05LjItMjEuMi05LjItMzIuN0MzMiAyOC4xIDU5LjcgMCA5My45IDBjMjkuMiAwIDU0LjQgMjAuNCA2MC42IDQ5bDI3LjEgMTI2LjZDMTg3IDIwMC41IDE2OCAyMjQgMTQyLjUgMjI0Yy0xNCAwLTI2LjktNy4zLTM0LjItMTkuMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iIi8+PC9zdmc+|width=32|height=32)
 */
const AccentGrave: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path class={generic.secondary} d="M108.3 204.8L41.2 95c-6-9.8-9.2-21.2-9.2-32.7C32 28.1 59.7 0 93.9 0c29.2 0 54.4 20.4 60.6 49l27.1 126.6C187 200.5 168 224 142.5 224c-14 0-26.9-7.3-34.2-19.2z" />
    </Icon>
);

export default AccentGrave;