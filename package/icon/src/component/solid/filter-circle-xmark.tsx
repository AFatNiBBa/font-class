
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `filter-circle-xmark` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/filter-circle-xmark?s=solid filter-circle-xmark}
 * @preview ![filter-circle-xmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODIuNzU4IDE5OS4xNDNMNTA0LjYyNSA1Mi4xODZDNTIxLjk2NSAzMS4yNzUgNTA2Ljc4NyAwIDQ3OS4yOTkgMEgzMi43MDFDNS4yMTMgMCAtOS45NjUgMzEuMjc1IDcuMzc1IDUyLjE4NkwxOTIgMjc0LjgyMlYzNjhDMTkyIDM3NS44MjggMTk1LjgxMyAzODMuMTcyIDIwMi4yNSAzODcuNjU2TDI2OS4xMjUgNDM0LjQ1NUMyNjAuNzE5IDQxMy45MyAyNTYgMzkxLjUxNiAyNTYgMzY4QzI1NiAyODguMDU3IDMwOS42MjUgMjIwLjUxIDM4Mi43NTggMTk5LjE0M1pNNDMyIDIyNEMzNTIuNDcxIDIyNCAyODggMjg4LjQ3MSAyODggMzY4UzM1Mi40NzEgNTEyIDQzMiA1MTJTNTc2IDQ0Ny41MjkgNTc2IDM2OFM1MTEuNTMgMjI0IDQzMiAyMjRaTTQ4OC41MTQgNDAxLjkwOEM0OTQuNzU2IDQwOC4xNSA0OTQuNzU2IDQxOC4yNzEgNDg4LjUxNCA0MjQuNTE0QzQ4Mi4yNzQgNDMwLjc1NiA0NzIuMTUxIDQzMC43NTYgNDY1LjkwOCA0MjQuNTE0TDQzMi4wMDIgMzkwLjYwN0wzOTguMDkyIDQyNC41MThDMzkxLjg1IDQzMC43NiAzODEuNzI5IDQzMC43NiAzNzUuNDg3IDQyNC41MThTMzY5LjI0NCA0MDguMTU0IDM3NS40ODcgNDAxLjkxMkw0MDkuMzk3IDM2OC4wMDJMMzc1LjQ4MyAzMzQuMDg4QzM2OS4yNCAzMjcuODQ2IDM2OS4yNCAzMTcuNzI1IDM3NS40ODMgMzExLjQ4MlMzOTEuODQ4IDMwNS4yNCAzOTguMDkgMzExLjQ4Mkw0MzIuMDAyIDM0NS4zOTZMNDY1LjkxMiAzMTEuNDg2QzQ3Mi4xNTUgMzA1LjI0NCA0ODIuMjc2IDMwNS4yNDQgNDg4LjUxOCAzMTEuNDg2UzQ5NC43NiAzMjcuODUgNDg4LjUxOCAzMzQuMDkyTDQ1NC42MDggMzY4LjAwMkw0ODguNTE0IDQwMS45MDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function FilterCircleXmark(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M382.758 199.143L504.625 52.186C521.965 31.275 506.787 0 479.299 0H32.701C5.213 0 -9.965 31.275 7.375 52.186L192 274.822V368C192 375.828 195.813 383.172 202.25 387.656L269.125 434.455C260.719 413.93 256 391.516 256 368C256 288.057 309.625 220.51 382.758 199.143ZM432 224C352.471 224 288 288.471 288 368S352.471 512 432 512S576 447.529 576 368S511.53 224 432 224ZM488.514 401.908C494.756 408.15 494.756 418.271 488.514 424.514C482.274 430.756 472.151 430.756 465.908 424.514L432.002 390.607L398.092 424.518C391.85 430.76 381.729 430.76 375.487 424.518S369.244 408.154 375.487 401.912L409.397 368.002L375.483 334.088C369.24 327.846 369.24 317.725 375.483 311.482S391.848 305.24 398.09 311.482L432.002 345.396L465.912 311.486C472.155 305.244 482.276 305.244 488.518 311.486S494.76 327.85 488.518 334.092L454.608 368.002L488.514 401.908Z" />
        </Icon>
    </>
}