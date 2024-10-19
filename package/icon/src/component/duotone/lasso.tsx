
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lasso` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lasso?s=duotone lasso}
 * @preview ![lasso](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik01NzYgMTc2YzAgOTcuMi0xMjguOSAxNzYtMjg4IDE3NmMtMTMuMiAwLTI2LjMtLjUtMzktMS42YzQuNiAxMi44IDcgMjYuNSA3IDQwLjZjMCA2Ni44LTU0LjIgMTIxLTEyMSAxMjFsLTcxIDBjLTE3LjcgMC0zMi0xNC4zLTMyLTMyczE0LjMtMzIgMzItMzJsNzEgMGMzMS41IDAgNTctMjUuNSA1Ny01N2MwLTIxLjYtMTIuMi00MS4zLTMxLjUtNTFsLTQ2LjgtMjMuNCAuMi0uNEM0NC43IDI4NC4xIDAgMjMzLjIgMCAxNzZDMCA3OC44IDEyOC45IDAgMjg4IDBTNTc2IDc4LjggNTc2IDE3NnpNMjg4IDI4OGMxMjMuNyAwIDIyNC01MC4xIDIyNC0xMTJzLTEwMC4zLTExMi0yMjQtMTEyUzY0IDExNC4xIDY0IDE3NnMxMDAuMyAxMTIgMjI0IDExMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iIi8+PC9zdmc+|width=32|height=32)
 */
const Lasso: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M576 176c0 97.2-128.9 176-288 176c-13.2 0-26.3-.5-39-1.6c4.6 12.8 7 26.5 7 40.6c0 66.8-54.2 121-121 121l-71 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l71 0c31.5 0 57-25.5 57-57c0-21.6-12.2-41.3-31.5-51l-46.8-23.4 .2-.4C44.7 284.1 0 233.2 0 176C0 78.8 128.9 0 288 0S576 78.8 576 176zM288 288c123.7 0 224-50.1 224-112s-100.3-112-224-112S64 114.1 64 176s100.3 112 224 112z" />
    </Icon>
);

export default Lasso;