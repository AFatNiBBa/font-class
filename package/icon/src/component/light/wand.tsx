
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `wand` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wand?s=light wand}
 * @preview ![wand](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDIuNzc3IDguODc1QzQ5MS4zNCAtMi40NzQgNDcxLjcxNiAtMy4wNjkgNDU5LjY3IDcuODQzTDE4Ni42NCAyNTUuODczSDE0NC4wMTdDMTM1LjE3NCAyNTUuODczIDEyOC4wMTggMjYzLjAzMyAxMjguMDE4IDI3MS44ODFWMzA4Ljc3NEwxMC40OTQgNDE0Ljg1OEMzLjk0NyA0MjAuNzk4IDAuMjI5IDQyOC45NTkgMC4wMSA0MzcuNzQ0Qy0wLjIwOSA0NDYuNTYxIDMuMTA0IDQ1NC44NzggOS4zNTMgNDYxLjE2Mkw1MC43ODggNTAyLjYyQzU2LjgzNSA1MDguNjU1IDY0Ljg2NiA1MTIgNzMuNDEyIDUxMkM4Mi41NTIgNTEyIDkwLjk3NCA1MDguMjc5IDk3LjE3NiA1MDEuNDY0TDM3Ni4zMzIgMTkxLjg0MUgzOTkuOTU1QzQwOC43OTggMTkxLjg0MSA0MTUuOTU0IDE4NC42ODEgNDE1Ljk1NCAxNzUuODMzVjE0Ny44MTlMNTAzLjg1NSA1Mi4wODRDNTAzLjg3MSA1Mi4wODQgNTAzLjkwMiA1Mi4wNTMgNTAzLjkxOCA1Mi4wMjFDNTE1LjEwNCAzOS43MDMgNTE0LjYzNiAyMC43NTYgNTAyLjc3NyA4Ljg3NVpNMzg4LjE3NSAxMzAuNzc5QzM4NS40NTYgMTMzLjcxOCAzODMuOTU2IDEzNy41OTUgMzgzLjk1NiAxNDEuNTk3VjE1OS44MjVIMzY5LjIyM0MzNjQuNjkyIDE1OS44MjUgMzYwLjM3OSAxNjEuNzMyIDM1Ny4zNDggMTY1LjEwOUw3My40MTIgNDc5Ljk4NEwzMS45NzcgNDM4LjU4OEwxNTQuNzIgMzI3LjgxNUMxNTguMDk1IDMyNC43ODIgMTYwLjAxNiAzMjAuNDM2IDE2MC4wMTYgMzE1LjkwM1YyODcuODg5SDE5Mi44MTFDMTk2Ljc4IDI4Ny44ODkgMjAwLjYyMyAyODYuNDE5IDIwMy41NjEgMjgzLjczTDQ3NC43NzkgMzYuNDUxTDM4OC4xNzUgMTMwLjc3OVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Wand(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M502.777 8.875C491.34 -2.474 471.716 -3.069 459.67 7.843L186.64 255.873H144.017C135.174 255.873 128.018 263.033 128.018 271.881V308.774L10.494 414.858C3.947 420.798 0.229 428.959 0.01 437.744C-0.209 446.561 3.104 454.878 9.353 461.162L50.788 502.62C56.835 508.655 64.866 512 73.412 512C82.552 512 90.974 508.279 97.176 501.464L376.332 191.841H399.955C408.798 191.841 415.954 184.681 415.954 175.833V147.819L503.855 52.084C503.871 52.084 503.902 52.053 503.918 52.021C515.104 39.703 514.636 20.756 502.777 8.875ZM388.175 130.779C385.456 133.718 383.956 137.595 383.956 141.597V159.825H369.223C364.692 159.825 360.379 161.732 357.348 165.109L73.412 479.984L31.977 438.588L154.72 327.815C158.095 324.782 160.016 320.436 160.016 315.903V287.889H192.811C196.78 287.889 200.623 286.419 203.561 283.73L474.779 36.451L388.175 130.779Z" />
        </Icon>
    </>
}