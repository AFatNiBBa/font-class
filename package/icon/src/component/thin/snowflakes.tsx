
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `snowflakes` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/snowflakes?s=thin snowflakes}
 * @preview ![snowflakes](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDYuOTIzIDEyNy41MzlDNDQ0LjY5OCAxMjMuNjk3IDQzOS43NzEgMTIyLjM5MSA0MzUuOTM1IDEyNC42MDJMMzQ4LjI1NyAxNzUuMTI1TDM2Ni43ODQgMTA2LjEwN0MzNjcuMzYxIDEwMy45NjcgMzY3LjAxMSAxMDEuNzk1IDM2NS45ODIgMTAwLjAxNlMzNjMuMjQzIDk2Ljg1IDM2MS4wOTcgOTYuMjc1QzM1Ni44MDQgOTUuMTI3IDM1Mi4zOTYgOTcuNjY4IDM1MS4yNDcgMTAxLjk1M0wzMjguNTU0IDE4Ni40NzlMMjMxLjk5OSAyNDIuMTE5VjEzMS4zMTJMMjkzLjY1NiA2OS42NTZDMjk2Ljc4MSA2Ni41MzEgMjk2Ljc4MSA2MS40NjkgMjkzLjY1NiA1OC4zNDRTMjg1LjQ2OCA1NS4yMTkgMjgyLjM0MyA1OC4zNDRMMjMxLjk5OSAxMDguNjg4VjhDMjMxLjk5OSAzLjU5NCAyMjguNDIxIDAgMjIzLjk5OSAwUzIxNS45OTkgMy41OTQgMjE1Ljk5OSA4VjEwOC42ODhMMTY1LjY1NiA1OC4zNDRDMTYyLjUzMSA1NS4yMTkgMTU3LjQ2OCA1NS4yMTkgMTU0LjM0MyA1OC4zNDRTMTUxLjIxOCA2Ni41MzEgMTU0LjM0MyA2OS42NTZMMjE1Ljk5OSAxMzEuMzEyVjI0Mi4xMTlMMTE5LjQ0NSAxODYuNDc5TDk2Ljc1MyAxMDEuOTUzQzk1LjYwMyA5Ny42NjggOTEuMTk1IDk1LjEyNyA4Ni45MDIgOTYuMjc1QzgyLjYxMSA5Ny40MjQgODAuMDY2IDEwMS44MjQgODEuMjE0IDEwNi4xMDdMOTkuNzQzIDE3NS4xMjVMMTIuMDY2IDEyNC42MDJDOC4yMjggMTIyLjM5MSAzLjMgMTIzLjY5NyAxLjA3NyAxMjcuNTM5Qy0xLjE0NSAxMzEuMzgzIDAuMTg1IDEzNi4yOTcgNC4wMjEgMTM4LjUwOEw5MS42OTggMTg5LjAzMUwyMi41NSAyMDcuNTI1QzE4LjI1NyAyMDguNjc0IDE1LjcxMiAyMTMuMDc0IDE2Ljg2MyAyMTcuMzU3QzE4LjAxMyAyMjEuNjQzIDIyLjQyMSAyMjQuMTgyIDI2LjcxNCAyMjMuMDMzTDExMS40MDIgMjAwLjM4NUwyMDcuOTExIDI1NkwxMTEuNDAyIDMxMS42MTVMMjYuNzE0IDI4OC45NjdDMjIuNDIxIDI4Ny44MTggMTguMDEzIDI5MC4zNTcgMTYuODYzIDI5NC42NDNDMTUuNzEyIDI5OC45MjYgMTguMjU3IDMwMy4zMjYgMjIuNTUgMzA0LjQ3NUw5MS42OTggMzIyLjk2OUw0LjAyMSAzNzMuNDkyQzAuMTg1IDM3NS43MDMgLTEuMTQ1IDM4MC42MTcgMS4wNzcgMzg0LjQ2MUMzLjMgMzg4LjMwMyA4LjIyOCAzODkuNjA5IDEyLjA2NiAzODcuMzk4TDk5Ljc0MyAzMzYuODc1TDgxLjIxNCA0MDUuODkzQzgwLjA2NiA0MTAuMTc2IDgyLjYxMSA0MTQuNTc2IDg2LjkwMiA0MTUuNzI1QzkxLjE5NSA0MTYuODczIDk1LjYwMyA0MTQuMzMyIDk2Ljc1MyA0MTAuMDQ3TDExOS40NDUgMzI1LjUyMUwyMTUuOTk5IDI2OS44ODFWMzgwLjY4OEwxNTQuMzQzIDQ0Mi4zNDRDMTUxLjIxOCA0NDUuNDY5IDE1MS4yMTggNDUwLjUzMSAxNTQuMzQzIDQ1My42NTZTMTYyLjUzMSA0NTYuNzgxIDE2NS42NTYgNDUzLjY1NkwyMTUuOTk5IDQwMy4zMTJWNTA0QzIxNS45OTkgNTA4LjQwNiAyMTkuNTc3IDUxMiAyMjMuOTk5IDUxMlMyMzEuOTk5IDUwOC40MDYgMjMxLjk5OSA1MDRWNDAzLjMxMkwyODIuMzQzIDQ1My42NTZDMjgzLjkwNiA0NTUuMjE5IDI4NS45NTIgNDU2IDI4Ny45OTkgNDU2UzI5Mi4wOTMgNDU1LjIxOSAyOTMuNjU2IDQ1My42NTZDMjk2Ljc4MSA0NTAuNTMxIDI5Ni43ODEgNDQ1LjQ2OSAyOTMuNjU2IDQ0Mi4zNDRMMjMxLjk5OSAzODAuNjg4VjI2OS44ODFMMzI4LjU1NCAzMjUuNTIxTDM1MS4yNDcgNDEwLjA0N0MzNTIuMzk2IDQxNC4zMzIgMzU2LjgwNCA0MTYuODczIDM2MS4wOTcgNDE1LjcyNVMzNjcuOTM1IDQxMC4xNzYgMzY2Ljc4NCA0MDUuODkzTDM0OC4yNTcgMzM2Ljg3NUw0MzUuOTM1IDM4Ny4zOThDNDM5Ljc3MSAzODkuNjA5IDQ0NC42OTggMzg4LjMwMyA0NDYuOTIzIDM4NC40NjFDNDQ5LjE0NiAzODAuNjE3IDQ0Ny44MTYgMzc1LjcwMyA0NDMuOTc4IDM3My40OTJMMzU2LjMgMzIyLjk2OUw0MjUuNDQ4IDMwNC40NzVDNDI3LjU5NSAzMDMuOSA0MjkuMzA0IDMwMi41MTQgNDMwLjMzMyAzMDAuNzM0UzQzMS43MTIgMjk2Ljc4NSA0MzEuMTM2IDI5NC42NDNDNDI5Ljk4OCAyOTAuMzU3IDQyNS41NzcgMjg3LjgxOCA0MjEuMjg2IDI4OC45NjdMMzM2LjU5OSAzMTEuNjE1TDI0MC4wODcgMjU2TDMzNi41OTkgMjAwLjM4NUw0MjEuMjg2IDIyMy4wMzNDNDI1LjU3NyAyMjQuMTgyIDQyOS45ODggMjIxLjY0MyA0MzEuMTM2IDIxNy4zNTdDNDMyLjI4NiAyMTMuMDc0IDQyOS43NDEgMjA4LjY3NCA0MjUuNDQ4IDIwNy41MjVMMzU2LjMgMTg5LjAzMUw0NDMuOTc4IDEzOC41MDhDNDQ3LjgxNiAxMzYuMjk3IDQ0OS4xNDYgMTMxLjM4MyA0NDYuOTIzIDEyNy41MzlaTTUzNS45OTkgMTIwQzUzNS45OTkgMTI0LjQwNiA1MzkuNTc3IDEyOCA1NDMuOTk5IDEyOFM1NTEuOTk5IDEyNC40MDYgNTUxLjk5OSAxMjBWNzcuODY1TDU4OC40OTkgOTguOTM4QzU4OS43NjUgOTkuNjU2IDU5MS4xNCAxMDAgNTkyLjQ5OSAxMDBDNTk1LjI0OSAxMDAgNTk3Ljk1MiA5OC41NjIgNTk5LjQyMSA5NkM2MDEuNjQgOTIuMTg4IDYwMC4zMjcgODcuMjgxIDU5Ni40OTkgODUuMDYyTDU2MC4wMTcgNjRMNTk2LjQ5OSA0Mi45MzhDNjAwLjMyNyA0MC43MTkgNjAxLjY0IDM1LjgxMiA1OTkuNDIxIDMyQzU5Ny4yMDIgMjguMTU2IDU5Mi4yOTYgMjYuODQ0IDU4OC40OTkgMjkuMDYyTDU1MS45OTkgNTAuMTM1VjhDNTUxLjk5OSAzLjU5NCA1NDguNDIxIDAgNTQzLjk5OSAwUzUzNS45OTkgMy41OTQgNTM1Ljk5OSA4VjUwLjEzNUw0OTkuNDk5IDI5LjA2MkM0OTUuNzAyIDI2LjkzOCA0OTAuNzgxIDI4LjE4OCA0ODguNTc3IDMyQzQ4Ni4zNTkgMzUuODEyIDQ4Ny42NzEgNDAuNzE5IDQ5MS40OTkgNDIuOTM4TDUyNy45ODIgNjRMNDkxLjQ5OSA4NS4wNjJDNDg3LjY3MSA4Ny4yODEgNDg2LjM1OSA5Mi4xODggNDg4LjU3NyA5NkM0OTAuMDQ2IDk4LjU2MiA0OTIuNzQ5IDEwMCA0OTUuNDk5IDEwMEM0OTYuODU5IDEwMCA0OTguMjM0IDk5LjY1NiA0OTkuNDk5IDk4LjkzOEw1MzUuOTk5IDc3Ljg2NVYxMjBaTTU5Mi4wMTcgMjU2TDYyOC40OTkgMjM0LjkzOEM2MzIuMzI3IDIzMi43MTkgNjMzLjY0IDIyNy44MTIgNjMxLjQyMSAyMjRDNjI5LjIwMiAyMjAuMTU2IDYyNC4yOTYgMjE4Ljg0NCA2MjAuNDk5IDIyMS4wNjJMNTgzLjk5OSAyNDIuMTM1VjIwMEM1ODMuOTk5IDE5NS41OTQgNTgwLjQyMSAxOTIgNTc1Ljk5OSAxOTJTNTY3Ljk5OSAxOTUuNTk0IDU2Ny45OTkgMjAwVjI0Mi4xMzVMNTMxLjQ5OSAyMjEuMDYyQzUyNy43MDIgMjE4LjkzOCA1MjIuNzgxIDIyMC4xODggNTIwLjU3NyAyMjRDNTE4LjM1OSAyMjcuODEyIDUxOS42NzEgMjMyLjcxOSA1MjMuNDk5IDIzNC45MzhMNTU5Ljk4MiAyNTZMNTIzLjQ5OSAyNzcuMDYyQzUxOS42NzEgMjc5LjI4MSA1MTguMzU5IDI4NC4xODggNTIwLjU3NyAyODhDNTIyLjA0NiAyOTAuNTYyIDUyNC43NDkgMjkyIDUyNy40OTkgMjkyQzUyOC44NTkgMjkyIDUzMC4yMzQgMjkxLjY1NiA1MzEuNDk5IDI5MC45MzhMNTY3Ljk5OSAyNjkuODY1VjMxMkM1NjcuOTk5IDMxNi40MDYgNTcxLjU3NyAzMjAgNTc1Ljk5OSAzMjBTNTgzLjk5OSAzMTYuNDA2IDU4My45OTkgMzEyVjI2OS44NjVMNjIwLjQ5OSAyOTAuOTM4QzYyMS43NjUgMjkxLjY1NiA2MjMuMTQgMjkyIDYyNC40OTkgMjkyQzYyNy4yNDkgMjkyIDYyOS45NTIgMjkwLjU2MiA2MzEuNDIxIDI4OEM2MzMuNjQgMjg0LjE4OCA2MzIuMzI3IDI3OS4yODEgNjI4LjQ5OSAyNzcuMDYyTDU5Mi4wMTcgMjU2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Snowflakes(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M446.923 127.539C444.698 123.697 439.771 122.391 435.935 124.602L348.257 175.125L366.784 106.107C367.361 103.967 367.011 101.795 365.982 100.016S363.243 96.85 361.097 96.275C356.804 95.127 352.396 97.668 351.247 101.953L328.554 186.479L231.999 242.119V131.312L293.656 69.656C296.781 66.531 296.781 61.469 293.656 58.344S285.468 55.219 282.343 58.344L231.999 108.688V8C231.999 3.594 228.421 0 223.999 0S215.999 3.594 215.999 8V108.688L165.656 58.344C162.531 55.219 157.468 55.219 154.343 58.344S151.218 66.531 154.343 69.656L215.999 131.312V242.119L119.445 186.479L96.753 101.953C95.603 97.668 91.195 95.127 86.902 96.275C82.611 97.424 80.066 101.824 81.214 106.107L99.743 175.125L12.066 124.602C8.228 122.391 3.3 123.697 1.077 127.539C-1.145 131.383 0.185 136.297 4.021 138.508L91.698 189.031L22.55 207.525C18.257 208.674 15.712 213.074 16.863 217.357C18.013 221.643 22.421 224.182 26.714 223.033L111.402 200.385L207.911 256L111.402 311.615L26.714 288.967C22.421 287.818 18.013 290.357 16.863 294.643C15.712 298.926 18.257 303.326 22.55 304.475L91.698 322.969L4.021 373.492C0.185 375.703 -1.145 380.617 1.077 384.461C3.3 388.303 8.228 389.609 12.066 387.398L99.743 336.875L81.214 405.893C80.066 410.176 82.611 414.576 86.902 415.725C91.195 416.873 95.603 414.332 96.753 410.047L119.445 325.521L215.999 269.881V380.688L154.343 442.344C151.218 445.469 151.218 450.531 154.343 453.656S162.531 456.781 165.656 453.656L215.999 403.312V504C215.999 508.406 219.577 512 223.999 512S231.999 508.406 231.999 504V403.312L282.343 453.656C283.906 455.219 285.952 456 287.999 456S292.093 455.219 293.656 453.656C296.781 450.531 296.781 445.469 293.656 442.344L231.999 380.688V269.881L328.554 325.521L351.247 410.047C352.396 414.332 356.804 416.873 361.097 415.725S367.935 410.176 366.784 405.893L348.257 336.875L435.935 387.398C439.771 389.609 444.698 388.303 446.923 384.461C449.146 380.617 447.816 375.703 443.978 373.492L356.3 322.969L425.448 304.475C427.595 303.9 429.304 302.514 430.333 300.734S431.712 296.785 431.136 294.643C429.988 290.357 425.577 287.818 421.286 288.967L336.599 311.615L240.087 256L336.599 200.385L421.286 223.033C425.577 224.182 429.988 221.643 431.136 217.357C432.286 213.074 429.741 208.674 425.448 207.525L356.3 189.031L443.978 138.508C447.816 136.297 449.146 131.383 446.923 127.539ZM535.999 120C535.999 124.406 539.577 128 543.999 128S551.999 124.406 551.999 120V77.865L588.499 98.938C589.765 99.656 591.14 100 592.499 100C595.249 100 597.952 98.562 599.421 96C601.64 92.188 600.327 87.281 596.499 85.062L560.017 64L596.499 42.938C600.327 40.719 601.64 35.812 599.421 32C597.202 28.156 592.296 26.844 588.499 29.062L551.999 50.135V8C551.999 3.594 548.421 0 543.999 0S535.999 3.594 535.999 8V50.135L499.499 29.062C495.702 26.938 490.781 28.188 488.577 32C486.359 35.812 487.671 40.719 491.499 42.938L527.982 64L491.499 85.062C487.671 87.281 486.359 92.188 488.577 96C490.046 98.562 492.749 100 495.499 100C496.859 100 498.234 99.656 499.499 98.938L535.999 77.865V120ZM592.017 256L628.499 234.938C632.327 232.719 633.64 227.812 631.421 224C629.202 220.156 624.296 218.844 620.499 221.062L583.999 242.135V200C583.999 195.594 580.421 192 575.999 192S567.999 195.594 567.999 200V242.135L531.499 221.062C527.702 218.938 522.781 220.188 520.577 224C518.359 227.812 519.671 232.719 523.499 234.938L559.982 256L523.499 277.062C519.671 279.281 518.359 284.188 520.577 288C522.046 290.562 524.749 292 527.499 292C528.859 292 530.234 291.656 531.499 290.938L567.999 269.865V312C567.999 316.406 571.577 320 575.999 320S583.999 316.406 583.999 312V269.865L620.499 290.938C621.765 291.656 623.14 292 624.499 292C627.249 292 629.952 290.562 631.421 288C633.64 284.188 632.327 279.281 628.499 277.062L592.017 256Z" />
        </Icon>
    </>
}