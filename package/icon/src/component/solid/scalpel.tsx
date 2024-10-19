
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `scalpel` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/scalpel?s=solid scalpel}
 * @preview ![scalpel](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODIuNzM4IDExLjg2MUM0NTMuNTA2IC05LjAxNCA0MTIuNTMxIC0xLjEzOSAzODkuMjk3IDI2LjExM0wxODcuOTIyIDI2MS40OThDMTc4LjkyOCAyNzIgMTg2LjQyNCAyODggMjAwLjA0MSAyODhIMzMxLjk1N0MzNDEuMzI2IDI4OCAzNTAuMTk1IDI4My44NzUgMzU2LjMxNiAyNzYuNzVMNDk1LjIzIDExNC4zNjdDNTIxLjU5IDgzLjQ5IDUxNi40NjcgMzUuODYzIDQ4Mi43MzggMTEuODYxWk0wIDUxMkM4OC45NjkgNTEyLjEyNSAxNzQuMTA0IDQ4Mi44NzUgMjM5LjU1MyA0MzAuODc1QzIzOS44MDkgNDMwLjYyNSAyMzkuOTM2IDQzMC41IDI0MC4xOTEgNDMwLjM3NUMyNzIuMjc3IDQwNC42MjUgMjg4IDM2Ni4zNzUgMjg4IDMyOFYzMjBIMTc5Ljk4NEwwIDUxMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Scalpel(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M482.738 11.861C453.506 -9.014 412.531 -1.139 389.297 26.113L187.922 261.498C178.928 272 186.424 288 200.041 288H331.957C341.326 288 350.195 283.875 356.316 276.75L495.23 114.367C521.59 83.49 516.467 35.863 482.738 11.861ZM0 512C88.969 512.125 174.104 482.875 239.553 430.875C239.809 430.625 239.936 430.5 240.191 430.375C272.277 404.625 288 366.375 288 328V320H179.984L0 512Z" />
        </Icon>
    </>
}