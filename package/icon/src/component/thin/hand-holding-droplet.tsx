
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hand-holding-droplet` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-holding-droplet?s=thin hand-holding-droplet}
 * @preview ![hand-holding-droplet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODcuOTc2IDI1NkMzNDAuOTc0IDI1NiAzODMuOTczIDIxMy44NzUgMzgzLjk3MyAxNjJDMzgzLjk3MyAxMjIgMzI2Ljg1IDQxLjI1IDMwMC43MjYgNi4zNzVDMjk3LjUzOCAyLjEyNSAyOTIuNzU3IDAgMjg3Ljk3NiAwUzI3OC40MTQgMi4xMjUgMjc1LjIyNyA2LjM3NUMyNDkuMTAzIDQxLjI1IDE5MS45OCAxMjIgMTkxLjk4IDE2MkMxOTEuOTggMjEzLjg3NSAyMzQuOTc4IDI1NiAyODcuOTc2IDI1NlpNMjg3Ljk1MSAxNi4wMDhDMzM3LjMxNCA4MS45MTQgMzY3Ljk3NCAxMzcuODQ4IDM2Ny45NzQgMTYyQzM2Ny45NzQgMjA1LjAwOCAzMzIuMDg2IDI0MCAyODcuOTc2IDI0MFMyMDcuOTc5IDIwNS4wMDggMjA3Ljk3OSAxNjJDMjA3Ljk3OSAxMzcuODQ0IDIzOC42NTQgODEuODkxIDI4Ny45NTEgMTYuMDA4Wk01NjYuNjIxIDMyMy41NjJDNTU4Ljk4MSAzMTMuMTg3IDU0Ny43NzggMzA2LjQzOCA1MzUuMDc1IDMwNC41MzFDNTIyLjMxIDMwMi41MzEgNTA5Ljc2MyAzMDUuNzgxIDQ5OS40OTggMzEzLjQwNkwzODEuOTU1IDQwMEgyNjMuOTc1QzI1OS42MzIgNDAwIDI1NS45NzUgMzk2LjM0NCAyNTUuOTc1IDM5Mi4wMzFDMjU1Ljk3NSAzODcuNjg4IDI1OS42MzIgMzg0LjAzMSAyNjMuOTc1IDM4NC4wMzFIMzQyLjIwN0MzNjIuNTY1IDM4NC4wMzEgMzgwLjI5OSAzNjkuNzE5IDM4My40NzEgMzUwLjY4OEMzODUuMzc3IDMzOC45NjkgMzgyLjExMiAzMjcuMDk0IDM3NC40ODcgMzE4LjE1NkMzNjYuODYyIDMwOS4xODggMzU1LjcyMiAzMDQuMDMxIDM0My45NTcgMzA0LjAzMUgxODMuOTc4QzE1NS4yNiAzMDQuMDMxIDEyNy4xNTIgMzE0IDEwNC44MjQgMzMyLjA2M0w2MC41MjkgMzY4LjAzMUg4QzMuNTc4IDM2OC4wMzEgMCAzNzEuNjI1IDAgMzc2LjAzMVMzLjU3OCAzODQuMDMxIDggMzg0LjAzMUg2Ni4yMTZMMTE0LjkwMiAzNDQuNUMxMzQuMzg2IDMyOC43MTkgMTU4LjkxNiAzMjAuMDMxIDE4My45NzggMzIwLjAzMUgzNDMuOTU3QzM1MS4wMzUgMzIwLjAzMSAzNTcuNzIyIDMyMy4xMjUgMzYyLjMgMzI4LjVDMzY2Ljk0IDMzMy45NjkgMzY4Ljg0NyAzNDAuOTM4IDM2Ny42OSAzNDguMDk0QzM2NS44IDM1OS40NjkgMzU0Ljg0NyAzNjguMDMxIDM0Mi4yMDcgMzY4LjAzMUgyNjMuOTc1QzI1MC43NDEgMzY4LjAzMSAyMzkuOTc2IDM3OC44MTMgMjM5Ljk3NiAzOTIuMDMxUzI1MC43NDEgNDE2IDI2My45NzUgNDE2SDM4Ny4yMDVMNTA5LjAxMyAzMjYuMjgxQzUxNS44NzMgMzIxLjE4OCA1MjQuMzI2IDMxOS4xODggNTMyLjcgMzIwLjM0NEM1NDEuMTY5IDMyMS42MjUgNTQ4LjYzNyAzMjYuMTI1IDU1My43NDYgMzMzLjA2MkM1NTguODA5IDMzOS45MzggNTYwLjkwMiAzNDguMzc1IDU1OS42MjEgMzU2LjgxMkM1NTguMzQgMzY1LjI4MSA1NTMuODU2IDM3Mi43MTkgNTQ2Ljk2NSAzNzcuNzgxTDQxMS45MDggNDc3LjI4MUMzOTUuNTE3IDQ4OS4zNDQgMzc1LjI4NCA0OTYgMzU0Ljk1NiA0OTZIOEMzLjU3OCA0OTYgMCA0OTkuNTk0IDAgNTA0UzMuNTc4IDUxMiA4IDUxMkgzNTQuOTU2QzM3OC42NzQgNTEyIDQwMi4yODMgNTA0LjI1IDQyMS40MDcgNDkwLjE1Nkw1NTYuNDY1IDM5MC42NTZDNTY2Ljc3NyAzODMuMDYyIDU3My41MjcgMzcxLjkwNiA1NzUuNDQ5IDM1OS4yMTlDNTc3LjM3IDM0Ni41NjIgNTc0LjIzIDMzMy44NzUgNTY2LjYyMSAzMjMuNTYyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function HandHoldingDroplet(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M287.976 256C340.974 256 383.973 213.875 383.973 162C383.973 122 326.85 41.25 300.726 6.375C297.538 2.125 292.757 0 287.976 0S278.414 2.125 275.227 6.375C249.103 41.25 191.98 122 191.98 162C191.98 213.875 234.978 256 287.976 256ZM287.951 16.008C337.314 81.914 367.974 137.848 367.974 162C367.974 205.008 332.086 240 287.976 240S207.979 205.008 207.979 162C207.979 137.844 238.654 81.891 287.951 16.008ZM566.621 323.562C558.981 313.187 547.778 306.438 535.075 304.531C522.31 302.531 509.763 305.781 499.498 313.406L381.955 400H263.975C259.632 400 255.975 396.344 255.975 392.031C255.975 387.688 259.632 384.031 263.975 384.031H342.207C362.565 384.031 380.299 369.719 383.471 350.688C385.377 338.969 382.112 327.094 374.487 318.156C366.862 309.188 355.722 304.031 343.957 304.031H183.978C155.26 304.031 127.152 314 104.824 332.063L60.529 368.031H8C3.578 368.031 0 371.625 0 376.031S3.578 384.031 8 384.031H66.216L114.902 344.5C134.386 328.719 158.916 320.031 183.978 320.031H343.957C351.035 320.031 357.722 323.125 362.3 328.5C366.94 333.969 368.847 340.938 367.69 348.094C365.8 359.469 354.847 368.031 342.207 368.031H263.975C250.741 368.031 239.976 378.813 239.976 392.031S250.741 416 263.975 416H387.205L509.013 326.281C515.873 321.188 524.326 319.188 532.7 320.344C541.169 321.625 548.637 326.125 553.746 333.062C558.809 339.938 560.902 348.375 559.621 356.812C558.34 365.281 553.856 372.719 546.965 377.781L411.908 477.281C395.517 489.344 375.284 496 354.956 496H8C3.578 496 0 499.594 0 504S3.578 512 8 512H354.956C378.674 512 402.283 504.25 421.407 490.156L556.465 390.656C566.777 383.062 573.527 371.906 575.449 359.219C577.37 346.562 574.23 333.875 566.621 323.562Z" />
        </Icon>
    </>
}