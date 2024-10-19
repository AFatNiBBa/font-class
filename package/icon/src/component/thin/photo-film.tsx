
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `photo-film` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/photo-film?s=thin photo-film}
 * @preview ![photo-film](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01OTIgMEgyMzkuOTlDMjEzLjQ4MSAwIDE5MS45OSAyMS40OSAxOTEuOTkgNDhWMzA0QzE5MS45OSAzMzAuNTEgMjEzLjQ4MSAzNTIgMjM5Ljk5IDM1Mkg1OTJDNjE4LjUxIDM1MiA2NDAgMzMwLjUxIDY0MCAzMDRWNDhDNjQwIDIxLjQ5IDYxOC41MSAwIDU5MiAwWk0yMzkuOTkxIDMzNkMyMjIuMzE4IDMzNiAyMDcuOTkxIDMyMS42NzMgMjA3Ljk5MSAzMDRWMjg1LjM4N0wzMTUuMDA2IDE3OC4zNDVDMzE4LjEyNiAxNzUuMjI0IDMyMy4yMzEgMTc1LjIyNCAzMjYuMzUxIDE3OC4zNDRMMzczLjAzOSAyMjUuMDMxTDI2Mi4wNjggMzM2SDIzOS45OTFaTTYyNCAzMDRDNjI0IDMyMS42NzMgNjA5LjY3MyAzMzYgNTkyIDMzNkgyODQuNjk0TDUwNi4zNTUgMTE0LjMyOEM1MDcuODU1IDExMi44MjggNTA5Ljg1NSAxMTIgNTExLjk4IDExMkg1MTIuMDExQzUxNC4xMzYgMTEyIDUxNi4xNjcgMTEyLjgyOCA1MTcuNjY3IDExNC4zNDRMNjI0IDIyMC42NzRWMzA0Wk02MjQgMTk4LjA0OUw1MjguOTggMTAzLjAzMUM1MjQuNDQ5IDk4LjUgNTE4LjQxNyA5NiA1MTIuMDExIDk2QzUxMS45OCA5NiA1MTEuOTggOTYgNTExLjk4IDk2QzUwNS41NDIgOTYuMDE2IDQ5OS41NDIgOTguNTE2IDQ5NS4wNDIgMTAzLjAzMUwzODQuMzUyIDIxMy43MTlMMzM3LjY2MSAxNjcuMDI5QzMyOC4yODEgMTU3LjY0OSAzMTMuMDczIDE1Ny42NSAzMDMuNjk0IDE2Ny4wMzFMMjA3Ljk5MSAyNjIuNzU4VjQ4QzIwNy45OTEgMzAuMzI3IDIyMi4zMTggMTYgMjM5Ljk5MSAxNkg1OTJDNjA5LjY3MyAxNiA2MjQgMzAuMzI3IDYyNCA0OFYxOTguMDQ5Wk0yODguMDA2IDU2QzI2NS45NDMgNTYgMjQ4LjAwNSA3My45MzggMjQ4LjAwNSA5NlMyNjUuOTQzIDEzNiAyODguMDA2IDEzNkMzMTAuMDY5IDEzNiAzMjguMDA3IDExOC4wNjIgMzI4LjAwNyA5NlMzMTAuMDY5IDU2IDI4OC4wMDYgNTZaTTI4OC4wMDYgMTIwQzI3NC43ODcgMTIwIDI2NC4wMDYgMTA5LjIzNCAyNjQuMDA2IDk2UzI3NC43ODcgNzIgMjg4LjAwNiA3MkMzMDEuMjI1IDcyIDMxMi4wMDcgODIuNzY2IDMxMi4wMDcgOTZTMzAxLjIyNSAxMjAgMjg4LjAwNiAxMjBaTTUwNC4wMTEgMzg0QzQ5OS42MDQgMzg0IDQ5Ni4wMTEgMzg3LjU3OCA0OTYuMDExIDM5MlY0MDBINDAwLjAwOVYzOTJDNDAwLjAwOSAzODcuNTgyIDM5Ni40MjYgMzg0IDM5Mi4wMDggMzg0QzM4Ny41ODggMzg0IDM4NC4wMDggMzg3LjU4MiAzODQuMDA4IDM5MlY0OTZIMTI4LjAwM1YxNDRIMTUyLjAwM0MxNTYuNDEgMTQ0IDE2MC4wMDMgMTQwLjQyMiAxNjAuMDAzIDEzNlMxNTYuNDEgMTI4IDE1Mi4wMDMgMTI4SDQ4QzIxLjQ5IDEyOCAwIDE0OS40OSAwIDE3NlY0NjRDMCA0OTAuNTEgMjEuNDkgNTEyIDQ4IDUxMkg0NjQuMDExQzQ5MC41MjEgNTEyIDUxMi4wMTEgNDkwLjUxIDUxMi4wMTEgNDY0VjM5MkM1MTIuMDExIDM4Ny41NzggNTA4LjQxNyAzODQgNTA0LjAxMSAzODRaTTExMi4wMDIgNDk2SDQ4QzMwLjMyNyA0OTYgMTYgNDgxLjY3MyAxNiA0NjRWNDE2SDExMi4wMDJWNDk2Wk0xMTIuMDAyIDQwMEgxNlYzMjhIMTEyLjAwMlY0MDBaTTExMi4wMDIgMzEySDE2VjI0MEgxMTIuMDAyVjMxMlpNMTEyLjAwMiAyMjRIMTZWMTc2QzE2IDE1OC4zMjcgMzAuMzI3IDE0NCA0OCAxNDRIMTEyLjAwMlYyMjRaTTQ5Ni4wMTEgNDY0QzQ5Ni4wMTEgNDgxLjY3MyA0ODEuNjg0IDQ5NiA0NjQuMDExIDQ5Nkg0MDAuMDA5VjQxNkg0OTYuMDExVjQ2NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function PhotoFilm(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M592 0H239.99C213.481 0 191.99 21.49 191.99 48V304C191.99 330.51 213.481 352 239.99 352H592C618.51 352 640 330.51 640 304V48C640 21.49 618.51 0 592 0ZM239.991 336C222.318 336 207.991 321.673 207.991 304V285.387L315.006 178.345C318.126 175.224 323.231 175.224 326.351 178.344L373.039 225.031L262.068 336H239.991ZM624 304C624 321.673 609.673 336 592 336H284.694L506.355 114.328C507.855 112.828 509.855 112 511.98 112H512.011C514.136 112 516.167 112.828 517.667 114.344L624 220.674V304ZM624 198.049L528.98 103.031C524.449 98.5 518.417 96 512.011 96C511.98 96 511.98 96 511.98 96C505.542 96.016 499.542 98.516 495.042 103.031L384.352 213.719L337.661 167.029C328.281 157.649 313.073 157.65 303.694 167.031L207.991 262.758V48C207.991 30.327 222.318 16 239.991 16H592C609.673 16 624 30.327 624 48V198.049ZM288.006 56C265.943 56 248.005 73.938 248.005 96S265.943 136 288.006 136C310.069 136 328.007 118.062 328.007 96S310.069 56 288.006 56ZM288.006 120C274.787 120 264.006 109.234 264.006 96S274.787 72 288.006 72C301.225 72 312.007 82.766 312.007 96S301.225 120 288.006 120ZM504.011 384C499.604 384 496.011 387.578 496.011 392V400H400.009V392C400.009 387.582 396.426 384 392.008 384C387.588 384 384.008 387.582 384.008 392V496H128.003V144H152.003C156.41 144 160.003 140.422 160.003 136S156.41 128 152.003 128H48C21.49 128 0 149.49 0 176V464C0 490.51 21.49 512 48 512H464.011C490.521 512 512.011 490.51 512.011 464V392C512.011 387.578 508.417 384 504.011 384ZM112.002 496H48C30.327 496 16 481.673 16 464V416H112.002V496ZM112.002 400H16V328H112.002V400ZM112.002 312H16V240H112.002V312ZM112.002 224H16V176C16 158.327 30.327 144 48 144H112.002V224ZM496.011 464C496.011 481.673 481.684 496 464.011 496H400.009V416H496.011V464Z" />
        </Icon>
    </>
}