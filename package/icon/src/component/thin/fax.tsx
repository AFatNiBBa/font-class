
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `fax` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/fax?s=thin fax}
 * @preview ![fax](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzIgMzY4SDQxNkM0MDIuNzQ2IDM2OCAzOTIgMzc4Ljc0NiAzOTIgMzkyVjQwOEMzOTIgNDIxLjI1NCA0MDIuNzQ2IDQzMiA0MTYgNDMySDQzMkM0NDUuMjU2IDQzMiA0NTYgNDIxLjI1NCA0NTYgNDA4VjM5MkM0NTYgMzc4Ljc0NiA0NDUuMjU2IDM2OCA0MzIgMzY4Wk00NDAgNDA4QzQ0MCA0MTIuNDEgNDM2LjQxMiA0MTYgNDMyIDQxNkg0MTZDNDExLjU5IDQxNiA0MDggNDEyLjQxIDQwOCA0MDhWMzkyQzQwOCAzODcuNTkgNDExLjU5IDM4NCA0MTYgMzg0SDQzMkM0MzYuNDEyIDM4NCA0NDAgMzg3LjU5IDQ0MCAzOTJWNDA4Wk0yNDAgMzY4SDIyNEMyMTAuNzQ2IDM2OCAyMDAgMzc4Ljc0NiAyMDAgMzkyVjQwOEMyMDAgNDIxLjI1NCAyMTAuNzQ2IDQzMiAyMjQgNDMySDI0MEMyNTMuMjU2IDQzMiAyNjQgNDIxLjI1NCAyNjQgNDA4VjM5MkMyNjQgMzc4Ljc0NiAyNTMuMjU2IDM2OCAyNDAgMzY4Wk0yNDggNDA4QzI0OCA0MTIuNDEgMjQ0LjQxMiA0MTYgMjQwIDQxNkgyMjRDMjE5LjU5IDQxNiAyMTYgNDEyLjQxIDIxNiA0MDhWMzkyQzIxNiAzODcuNTkgMjE5LjU5IDM4NCAyMjQgMzg0SDI0MEMyNDQuNDEyIDM4NCAyNDggMzg3LjU5IDI0OCAzOTJWNDA4Wk0yNDAgMjcySDIyNEMyMTAuNzQ2IDI3MiAyMDAgMjgyLjc0NiAyMDAgMjk2VjMxMkMyMDAgMzI1LjI1NCAyMTAuNzQ2IDMzNiAyMjQgMzM2SDI0MEMyNTMuMjU2IDMzNiAyNjQgMzI1LjI1NCAyNjQgMzEyVjI5NkMyNjQgMjgyLjc0NiAyNTMuMjU2IDI3MiAyNDAgMjcyWk0yNDggMzEyQzI0OCAzMTYuNDEgMjQ0LjQxMiAzMjAgMjQwIDMyMEgyMjRDMjE5LjU5IDMyMCAyMTYgMzE2LjQxIDIxNiAzMTJWMjk2QzIxNiAyOTEuNTkgMjE5LjU5IDI4OCAyMjQgMjg4SDI0MEMyNDQuNDEyIDI4OCAyNDggMjkxLjU5IDI0OCAyOTZWMzEyWk0zMzYgMjcySDMyMEMzMDYuNzQ2IDI3MiAyOTYgMjgyLjc0NiAyOTYgMjk2VjMxMkMyOTYgMzI1LjI1NCAzMDYuNzQ2IDMzNiAzMjAgMzM2SDMzNkMzNDkuMjU2IDMzNiAzNjAgMzI1LjI1NCAzNjAgMzEyVjI5NkMzNjAgMjgyLjc0NiAzNDkuMjU2IDI3MiAzMzYgMjcyWk0zNDQgMzEyQzM0NCAzMTYuNDEgMzQwLjQxMiAzMjAgMzM2IDMyMEgzMjBDMzE1LjU5IDMyMCAzMTIgMzE2LjQxIDMxMiAzMTJWMjk2QzMxMiAyOTEuNTkgMzE1LjU5IDI4OCAzMjAgMjg4SDMzNkMzNDAuNDEyIDI4OCAzNDQgMjkxLjU5IDM0NCAyOTZWMzEyWk00MzIgMjcySDQxNkM0MDIuNzQ2IDI3MiAzOTIgMjgyLjc0NiAzOTIgMjk2VjMxMkMzOTIgMzI1LjI1NCA0MDIuNzQ2IDMzNiA0MTYgMzM2SDQzMkM0NDUuMjU2IDMzNiA0NTYgMzI1LjI1NCA0NTYgMzEyVjI5NkM0NTYgMjgyLjc0NiA0NDUuMjU2IDI3MiA0MzIgMjcyWk00NDAgMzEyQzQ0MCAzMTYuNDEgNDM2LjQxMiAzMjAgNDMyIDMyMEg0MTZDNDExLjU5IDMyMCA0MDggMzE2LjQxIDQwOCAzMTJWMjk2QzQwOCAyOTEuNTkgNDExLjU5IDI4OCA0MTYgMjg4SDQzMkM0MzYuNDEyIDI4OCA0NDAgMjkxLjU5IDQ0MCAyOTZWMzEyWk0zMzYgMzY4SDMyMEMzMDYuNzQ2IDM2OCAyOTYgMzc4Ljc0NiAyOTYgMzkyVjQwOEMyOTYgNDIxLjI1NCAzMDYuNzQ2IDQzMiAzMjAgNDMySDMzNkMzNDkuMjU2IDQzMiAzNjAgNDIxLjI1NCAzNjAgNDA4VjM5MkMzNjAgMzc4Ljc0NiAzNDkuMjU2IDM2OCAzMzYgMzY4Wk0zNDQgNDA4QzM0NCA0MTIuNDEgMzQwLjQxMiA0MTYgMzM2IDQxNkgzMjBDMzE1LjU5IDQxNiAzMTIgNDEyLjQxIDMxMiA0MDhWMzkyQzMxMiAzODcuNTkgMzE1LjU5IDM4NCAzMjAgMzg0SDMzNkMzNDAuNDEyIDM4NCAzNDQgMzg3LjU5IDM0NCAzOTJWNDA4Wk00NjQgMTkySDE5MkMxNzkuNjUgMTkyIDE2OC41MDYgMTk2Ljc5NSAxNjAgMjA0LjQ1N1YxMTJDMTYwIDg1LjYgMTM4LjQgNjQgMTEyIDY0SDQ4QzIxLjYgNjQgMCA4NS42IDAgMTEyVjQ2NEMwIDQ5MC40IDIxLjYgNTEyIDQ4IDUxMkgxMTJDMTI4LjY0OCA1MTIgMTQzLjM1NSA1MDMuMzg5IDE1MS45NzMgNDkwLjQyNEMxNjAuNTY0IDUwMy40MSAxNzUuMjY0IDUxMiAxOTIgNTEySDQ2NEM0OTAuNTEgNTEyIDUxMiA0OTAuNTEgNTEyIDQ2NFYyNDBDNTEyIDIxMy40OSA0OTAuNTEgMTkyIDQ2NCAxOTJaTTE0NCA0NjRDMTQ0IDQ4MS42NDUgMTI5LjY0NSA0OTYgMTEyIDQ5Nkg0OEMzMC4zNTUgNDk2IDE2IDQ4MS42NDUgMTYgNDY0VjExMkMxNiA5NC4zNTUgMzAuMzU1IDgwIDQ4IDgwSDExMkMxMjkuNjQ1IDgwIDE0NCA5NC4zNTUgMTQ0IDExMlY0NjRaTTQ5NiA0NjRDNDk2IDQ4MS42NDUgNDgxLjY0NSA0OTYgNDY0IDQ5NkgxOTJDMTc0LjM1NSA0OTYgMTYwIDQ4MS42NDUgMTYwIDQ2NFYyNDBDMTYwIDIyMi4zNTUgMTc0LjM1NSAyMDggMTkyIDIwOEg0NjRDNDgxLjY0NSAyMDggNDk2IDIyMi4zNTUgNDk2IDI0MFY0NjRaTTE3NiAxNTJDMTc2IDE1Ni40MTggMTc5LjU4MiAxNjAgMTg0IDE2MFMxOTIgMTU2LjQxOCAxOTIgMTUyVjQwQzE5MiAyNi43OTkgMjAyLjgwMSAxNiAyMTYgMTZIMzk0Ljc0NEM0MDEuMTExIDE2IDQwNy4yMTcgMTguNTI5IDQxMS43MTkgMjMuMDMxTDQ1Ni45NjkgNjguMjgxQzQ2MS40NzEgNzIuNzgzIDQ2NCA3OC44ODkgNDY0IDg1LjI1NlYxNTJDNDY0IDE1Ni40MjIgNDY3LjU5NCAxNjAgNDcyIDE2MFM0ODAgMTU2LjQyMiA0ODAgMTUyVjg1LjI1QzQ4MCA3NC42NDUgNDc1Ljc4NyA2NC40NzUgNDY4LjI4OSA1Ni45NzVMNDIzLjAzMSAxMS43MTlDNDE1LjU5NCA0LjI2NiA0MDUuMjgxIDAgMzk0Ljc1IDBIMjE2QzE5My45MzggMCAxNzYgMTcuOTM4IDE3NiA0MEMxNzYgNDAgMTc1Ljk3NyA1Ny4wNjQgMTc2IDg0LjQyOFYxNTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Fax(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M432 368H416C402.746 368 392 378.746 392 392V408C392 421.254 402.746 432 416 432H432C445.256 432 456 421.254 456 408V392C456 378.746 445.256 368 432 368ZM440 408C440 412.41 436.412 416 432 416H416C411.59 416 408 412.41 408 408V392C408 387.59 411.59 384 416 384H432C436.412 384 440 387.59 440 392V408ZM240 368H224C210.746 368 200 378.746 200 392V408C200 421.254 210.746 432 224 432H240C253.256 432 264 421.254 264 408V392C264 378.746 253.256 368 240 368ZM248 408C248 412.41 244.412 416 240 416H224C219.59 416 216 412.41 216 408V392C216 387.59 219.59 384 224 384H240C244.412 384 248 387.59 248 392V408ZM240 272H224C210.746 272 200 282.746 200 296V312C200 325.254 210.746 336 224 336H240C253.256 336 264 325.254 264 312V296C264 282.746 253.256 272 240 272ZM248 312C248 316.41 244.412 320 240 320H224C219.59 320 216 316.41 216 312V296C216 291.59 219.59 288 224 288H240C244.412 288 248 291.59 248 296V312ZM336 272H320C306.746 272 296 282.746 296 296V312C296 325.254 306.746 336 320 336H336C349.256 336 360 325.254 360 312V296C360 282.746 349.256 272 336 272ZM344 312C344 316.41 340.412 320 336 320H320C315.59 320 312 316.41 312 312V296C312 291.59 315.59 288 320 288H336C340.412 288 344 291.59 344 296V312ZM432 272H416C402.746 272 392 282.746 392 296V312C392 325.254 402.746 336 416 336H432C445.256 336 456 325.254 456 312V296C456 282.746 445.256 272 432 272ZM440 312C440 316.41 436.412 320 432 320H416C411.59 320 408 316.41 408 312V296C408 291.59 411.59 288 416 288H432C436.412 288 440 291.59 440 296V312ZM336 368H320C306.746 368 296 378.746 296 392V408C296 421.254 306.746 432 320 432H336C349.256 432 360 421.254 360 408V392C360 378.746 349.256 368 336 368ZM344 408C344 412.41 340.412 416 336 416H320C315.59 416 312 412.41 312 408V392C312 387.59 315.59 384 320 384H336C340.412 384 344 387.59 344 392V408ZM464 192H192C179.65 192 168.506 196.795 160 204.457V112C160 85.6 138.4 64 112 64H48C21.6 64 0 85.6 0 112V464C0 490.4 21.6 512 48 512H112C128.648 512 143.355 503.389 151.973 490.424C160.564 503.41 175.264 512 192 512H464C490.51 512 512 490.51 512 464V240C512 213.49 490.51 192 464 192ZM144 464C144 481.645 129.645 496 112 496H48C30.355 496 16 481.645 16 464V112C16 94.355 30.355 80 48 80H112C129.645 80 144 94.355 144 112V464ZM496 464C496 481.645 481.645 496 464 496H192C174.355 496 160 481.645 160 464V240C160 222.355 174.355 208 192 208H464C481.645 208 496 222.355 496 240V464ZM176 152C176 156.418 179.582 160 184 160S192 156.418 192 152V40C192 26.799 202.801 16 216 16H394.744C401.111 16 407.217 18.529 411.719 23.031L456.969 68.281C461.471 72.783 464 78.889 464 85.256V152C464 156.422 467.594 160 472 160S480 156.422 480 152V85.25C480 74.645 475.787 64.475 468.289 56.975L423.031 11.719C415.594 4.266 405.281 0 394.75 0H216C193.938 0 176 17.938 176 40C176 40 175.977 57.064 176 84.428V152Z" />
        </Icon>
    </>
}