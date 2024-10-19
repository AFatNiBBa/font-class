
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `ruler-triangle` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-triangle?s=regular ruler-triangle}
 * @preview ![ruler-triangle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjguMDAyIDM4NEgyNTYuMDAyTDEyOC4wMDIgMjU2VjM4NFpNNTAxLjYzMSA0NTIuMTI1TDU5Ljg3NSAxMC4zNzVDNTIuNzUgMy4yNSA0NCAwIDM1LjM3NSAwQzE3LjI1IDAgMCAxNCAwIDM1LjEyNVY0NzYuODc1QzAgNDk2LjI1IDE1Ljc1IDUxMiAzNS4xMjUgNTEySDQ3Ni44ODFDNTA4LjEzMSA1MTIgNTIzLjc1NiA0NzQuMjUgNTAxLjYzMSA0NTIuMTI1Wk00OCA0NjRWNjYuMzc1TDkxLjUgMTA5Ljg3NUw3Ni42ODggMTI0LjY4OEM3MC40MzggMTMwLjkzOCA3MC40MzggMTQxLjA2MyA3Ni42ODggMTQ3LjMxMkM3OS44MTIgMTUwLjQzOCA4My45MDYgMTUyIDg4IDE1MlM5Ni4xODggMTUwLjQzOCA5OS4zMTIgMTQ3LjMxMkwxMTQuMTI1IDEzMi41TDE2My41IDE4MS44NzVMMTQ4LjY4OCAxOTYuNjg4QzE0Mi40MzggMjAyLjkzOCAxNDIuNDM4IDIxMy4wNjMgMTQ4LjY4OCAyMTkuMzEyQzE1MS44MTIgMjIyLjQzOCAxNTUuOTA2IDIyNCAxNjAgMjI0UzE2OC4xODggMjIyLjQzOCAxNzEuMzEyIDIxOS4zMTJMMTg2LjEyNSAyMDQuNUwyMzUuNSAyNTMuODc1TDIyMC42ODggMjY4LjY4OEMyMTQuNDM4IDI3NC45MzggMjE0LjQzOCAyODUuMDYzIDIyMC42ODggMjkxLjMxMkMyMjMuODEyIDI5NC40MzggMjI3LjkwNiAyOTYgMjMyIDI5NlMyNDAuMTg4IDI5NC40MzggMjQzLjMxMiAyOTEuMzEyTDI1OC4xMjcgMjc2LjQ5OEwzMDcuNTAyIDMyNS44NzNMMjkyLjY4OCAzNDAuNjg4QzI4Ni40MzggMzQ2LjkzOCAyODYuNDM4IDM1Ny4wNjMgMjkyLjY4OCAzNjMuMzEyQzI5NS44MTIgMzY2LjQzOCAyOTkuOTA2IDM2OCAzMDQgMzY4UzMxMi4xODggMzY2LjQzOCAzMTUuMzEyIDM2My4zMTJMMzMwLjEyNyAzNDguNDk4TDM3OS41MDIgMzk3Ljg3M0wzNjQuNjg4IDQxMi42ODhDMzU4LjQzOCA0MTguOTM4IDM1OC40MzggNDI5LjA2MyAzNjQuNjg4IDQzNS4zMTJDMzY3LjgxMiA0MzguNDM4IDM3MS45MDYgNDQwIDM3NiA0NDBTMzg0LjE4OCA0MzguNDM4IDM4Ny4zMTIgNDM1LjMxMkw0MDIuMTI3IDQyMC40OThMNDQ1LjYyOSA0NjRINDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function RulerTriangle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M128.002 384H256.002L128.002 256V384ZM501.631 452.125L59.875 10.375C52.75 3.25 44 0 35.375 0C17.25 0 0 14 0 35.125V476.875C0 496.25 15.75 512 35.125 512H476.881C508.131 512 523.756 474.25 501.631 452.125ZM48 464V66.375L91.5 109.875L76.688 124.688C70.438 130.938 70.438 141.063 76.688 147.312C79.812 150.438 83.906 152 88 152S96.188 150.438 99.312 147.312L114.125 132.5L163.5 181.875L148.688 196.688C142.438 202.938 142.438 213.063 148.688 219.312C151.812 222.438 155.906 224 160 224S168.188 222.438 171.312 219.312L186.125 204.5L235.5 253.875L220.688 268.688C214.438 274.938 214.438 285.063 220.688 291.312C223.812 294.438 227.906 296 232 296S240.188 294.438 243.312 291.312L258.127 276.498L307.502 325.873L292.688 340.688C286.438 346.938 286.438 357.063 292.688 363.312C295.812 366.438 299.906 368 304 368S312.188 366.438 315.312 363.312L330.127 348.498L379.502 397.873L364.688 412.688C358.438 418.938 358.438 429.063 364.688 435.312C367.812 438.438 371.906 440 376 440S384.188 438.438 387.312 435.312L402.127 420.498L445.629 464H48Z" />
        </Icon>
    </>
}