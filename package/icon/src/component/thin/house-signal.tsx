
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `house-signal` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/house-signal?s=thin house-signal}
 * @preview ![house-signal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik04IDIyMy45OTFDMy41OTQgMjIzLjk5MSAwIDIyNy41ODUgMCAyMzEuOTkxUzMuNTk0IDIzOS45OTIgOCAyMzkuOTkyQzE1My41NjIgMjM5Ljk5MiAyNzIgMzU4LjQzMyAyNzIgNTA0QzI3MiA1MDguNDA2IDI3NS41OTQgNTEyIDI4MCA1MTJTMjg4IDUwOC40MDYgMjg4IDUwNEMyODggMzQ5LjU4OSAxNjIuNDA2IDIyMy45OTEgOCAyMjMuOTkxWk04IDMxOS45OTRDMy41OTQgMzE5Ljk5NCAwIDMyMy41ODggMCAzMjcuOTk0UzMuNTk0IDMzNS45OTUgOCAzMzUuOTk1QzEwMC42MjUgMzM1Ljk5NSAxNzYgNDExLjM3MiAxNzYgNTA0QzE3NiA1MDguNDA2IDE3OS41OTQgNTEyIDE4NCA1MTJTMTkyIDUwOC40MDYgMTkyIDUwNEMxOTIgNDAyLjUyOCAxMDkuNDY5IDMxOS45OTQgOCAzMTkuOTk0Wk04IDQxNS45OTdDMy41OTQgNDE1Ljk5NyAwIDQxOS41OTEgMCA0MjMuOTk3UzMuNTk0IDQzMS45OTggOCA0MzEuOTk4QzQ3LjY4OCA0MzEuOTk4IDgwIDQ2NC4zMTEgODAgNTA0QzgwIDUwOC40MDYgODMuNTk0IDUxMiA4OCA1MTJTOTYgNTA4LjQwNiA5NiA1MDRDOTYgNDU1LjQ2NyA1Ni41MzEgNDE1Ljk5NyA4IDQxNS45OTdaTTQzMiAyOTUuOTkzQzQ0NS4yMTkgMjk1Ljk5MyA0NTYgMjg1LjIxMiA0NTYgMjcxLjk5M1YyMDcuOTkxQzQ1NiAxOTQuNzcyIDQ0NS4yMTkgMTgzLjk5IDQzMiAxODMuOTlIMzY4QzM1NC43ODEgMTgzLjk5IDM0NCAxOTQuNzcyIDM0NCAyMDcuOTkxVjI3MS45OTNDMzQ0IDI4NS4yMTIgMzU0Ljc4MSAyOTUuOTkzIDM2OCAyOTUuOTkzSDQzMlpNMzYwIDI3MS45OTNWMjA3Ljk5MUMzNjAgMjAzLjU4NCAzNjMuNTk0IDE5OS45OSAzNjggMTk5Ljk5SDQzMkM0MzYuNDA2IDE5OS45OSA0NDAgMjAzLjU4NCA0NDAgMjA3Ljk5MVYyNzEuOTkzQzQ0MCAyNzYuMzk5IDQzNi40MDYgMjc5Ljk5MyA0MzIgMjc5Ljk5M0gzNjhDMzYzLjU5NCAyNzkuOTkzIDM2MCAyNzYuMzk5IDM2MCAyNzEuOTkzWk02NDAuMDAxIDIxNi4wMDlDNjQwLjAwMSAyMTMuODA5IDYzOS4xMDQgMjExLjYxNCA2MzcuMzQ0IDIxMC4wMjJMNDA1LjM0NCAyLjAxNkM0MDMuODEyIDAuNjcyIDQwMS45MDYgMCA0MDAgMFMzOTYuMTg4IDAuNjcyIDM5NC42NTYgMi4wMTZMMTYyLjY1NiAyMTAuMDIyQzE2MC44OTYgMjExLjYxNCAxNTkuOTk5IDIxMy44MDkgMTU5Ljk5OSAyMTYuMDA5QzE1OS45OTkgMjIwLjQ0MyAxNjMuNTQ4IDIyMy45NDQgMTY3Ljk4MyAyMjMuOTQ0QzE2OS44ODggMjIzLjk0NCAxNzEuODAyIDIyMy4yODMgMTczLjM0NCAyMjEuOTZMMjI0IDE3Ni41NDFWMjYzLjk5MkMyMjQgMjY4LjQxMSAyMjcuNTgyIDI3MS45OTMgMjMyIDI3MS45OTNIMjMyQzIzNi40MTggMjcxLjk5MyAyNDAgMjY4LjQxMSAyNDAgMjYzLjk5MlYxNjIuMTkyTDQwMCAxOC43MzVMNTYwIDE2Mi4xOTJWMzc1Ljk5NkM1NjAgMzg5LjE5NiA1NDkuMiAzOTkuOTk3IDUzNiAzOTkuOTk3SDMyOEMzMjMuNTgyIDM5OS45OTcgMzIwIDQwMy41NzggMzIwIDQwNy45OTdMMzIwIDQwNy45OTdDMzIwIDQxMi40MTUgMzIzLjU4MiA0MTUuOTk3IDMyOCA0MTUuOTk3SDUzNkM1NTguMDkxIDQxNS45OTcgNTc2IDM5OC4wODggNTc2IDM3NS45OTZWMTc2LjU0MUw2MjYuNjU2IDIyMS45NkM2MjguMTg4IDIyMy4zMDQgNjMwLjA5NCAyMjMuOTkxIDYzMiAyMjMuOTkxQzYzNi4zNzYgMjIzLjk5MSA2NDAuMDAxIDIyMC40NzEgNjQwLjAwMSAyMTYuMDA5WiAiPjwvcGF0aD48L3N2Zz4=|width=32|height=32)
 */
export default function HouseSignal(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M8 223.991C3.594 223.991 0 227.585 0 231.991S3.594 239.992 8 239.992C153.562 239.992 272 358.433 272 504C272 508.406 275.594 512 280 512S288 508.406 288 504C288 349.589 162.406 223.991 8 223.991ZM8 319.994C3.594 319.994 0 323.588 0 327.994S3.594 335.995 8 335.995C100.625 335.995 176 411.372 176 504C176 508.406 179.594 512 184 512S192 508.406 192 504C192 402.528 109.469 319.994 8 319.994ZM8 415.997C3.594 415.997 0 419.591 0 423.997S3.594 431.998 8 431.998C47.688 431.998 80 464.311 80 504C80 508.406 83.594 512 88 512S96 508.406 96 504C96 455.467 56.531 415.997 8 415.997ZM432 295.993C445.219 295.993 456 285.212 456 271.993V207.991C456 194.772 445.219 183.99 432 183.99H368C354.781 183.99 344 194.772 344 207.991V271.993C344 285.212 354.781 295.993 368 295.993H432ZM360 271.993V207.991C360 203.584 363.594 199.99 368 199.99H432C436.406 199.99 440 203.584 440 207.991V271.993C440 276.399 436.406 279.993 432 279.993H368C363.594 279.993 360 276.399 360 271.993ZM640.001 216.009C640.001 213.809 639.104 211.614 637.344 210.022L405.344 2.016C403.812 0.672 401.906 0 400 0S396.188 0.672 394.656 2.016L162.656 210.022C160.896 211.614 159.999 213.809 159.999 216.009C159.999 220.443 163.548 223.944 167.983 223.944C169.888 223.944 171.802 223.283 173.344 221.96L224 176.541V263.992C224 268.411 227.582 271.993 232 271.993H232C236.418 271.993 240 268.411 240 263.992V162.192L400 18.735L560 162.192V375.996C560 389.196 549.2 399.997 536 399.997H328C323.582 399.997 320 403.578 320 407.997L320 407.997C320 412.415 323.582 415.997 328 415.997H536C558.091 415.997 576 398.088 576 375.996V176.541L626.656 221.96C628.188 223.304 630.094 223.991 632 223.991C636.376 223.991 640.001 220.471 640.001 216.009Z " />
        </Icon>
    </>
}