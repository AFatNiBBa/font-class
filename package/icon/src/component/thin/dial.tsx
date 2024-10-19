
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `dial` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dial?s=thin dial}
 * @preview ![dial](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODggNjRDMzA1LjY3MiA2NCAzMjAgNDkuNjc0IDMyMCAzMlMzMDUuNjcyIDAgMjg4IDBDMjcwLjMyNiAwIDI1NiAxNC4zMjYgMjU2IDMyUzI3MC4zMjYgNjQgMjg4IDY0Wk0yODggMTZDMjk2LjgyMiAxNiAzMDQgMjMuMTc4IDMwNCAzMlMyOTYuODIyIDQ4IDI4OCA0OFMyNzIgNDAuODIyIDI3MiAzMlMyNzkuMTc4IDE2IDI4OCAxNlpNMTA2Ljk4IDEzOC45ODJDMTE1LjE3IDEzOC45ODIgMTIzLjM1OSAxMzUuODU3IDEyOS42MDcgMTI5LjYwOUMxNDIuMTA0IDExNy4xMTEgMTQyLjEwNCA5Ni44NSAxMjkuNjA3IDg0LjM1NEMxMjMuMzU5IDc4LjEwNSAxMTUuMTcgNzQuOTggMTA2Ljk4IDc0Ljk4Qzk4Ljc4OSA3NC45OCA5MC42IDc4LjEwNSA4NC4zNTIgODQuMzU0QzcxLjg1NSA5Ni44NSA3MS44NTUgMTE3LjExMSA4NC4zNTIgMTI5LjYwOUM5MC42IDEzNS44NTcgOTguNzg5IDEzOC45ODIgMTA2Ljk4IDEzOC45ODJaTTk1LjY2NiA5NS42NjhDOTguNjg4IDkyLjY0NSAxMDIuNzA1IDkwLjk4IDEwNi45NzkgOTAuOThDMTExLjI1NCA5MC45OCAxMTUuMjcxIDkyLjY0NiAxMTguMjk1IDk1LjY2OEMxMjQuNTMxIDEwMS45MDYgMTI0LjUzMSAxMTIuMDU3IDExOC4yOTUgMTE4LjI5NUMxMTUuMjcxIDEyMS4zMTYgMTExLjI1NCAxMjIuOTggMTA2Ljk3OSAxMjIuOThDMTAyLjcwNSAxMjIuOTggOTguNjg4IDEyMS4zMTYgOTUuNjY2IDExOC4yOTdDOTIuNjQ1IDExNS4yNzMgOTAuOTc5IDExMS4yNTYgOTAuOTc5IDEwNi45OEM5MC45NzkgMTAyLjcwNyA5Mi42NDUgOTguNjg5IDk1LjY2NiA5NS42NjhaTTMyIDI1NkMxNC4zMjYgMjU2IDAgMjcwLjMyNiAwIDI4OFMxNC4zMjYgMzIwIDMyIDMyMFM2NCAzMDUuNjc0IDY0IDI4OFM0OS42NzQgMjU2IDMyIDI1NlpNMzIgMzA0QzIzLjE3OCAzMDQgMTYgMjk2LjgyMiAxNiAyODhTMjMuMTc4IDI3MiAzMiAyNzJTNDggMjc5LjE3OCA0OCAyODhTNDAuODIyIDMwNCAzMiAzMDRaTTU0NCAyNTZDNTI2LjMyNiAyNTYgNTEyIDI3MC4zMjggNTEyIDI4OEM1MTIgMzA1LjY3NCA1MjYuMzI2IDMyMCA1NDQgMzIwUzU3NiAzMDUuNjc0IDU3NiAyODhDNTc2IDI3MC4zMjggNTYxLjY3NCAyNTYgNTQ0IDI1NlpNNTQ0IDMwNEM1MzUuMTc4IDMwNCA1MjggMjk2LjgyMiA1MjggMjg4UzUzNS4xNzggMjcyIDU0NCAyNzJTNTYwIDI3OS4xNzggNTYwIDI4OFM1NTIuODIyIDMwNCA1NDQgMzA0Wk00NjkuMDIgNzQuOThDNDYwLjgzIDc0Ljk4IDQ1Mi42NDEgNzguMTA1IDQ0Ni4zOTMgODQuMzU0QzQzMy44OTUgOTYuODUgNDMzLjg5NSAxMTcuMTExIDQ0Ni4zOTMgMTI5LjYwOUM0NTIuNjQxIDEzNS44NTcgNDYwLjgzIDEzOC45ODIgNDY5LjAyIDEzOC45ODJTNDg1LjM5OCAxMzUuODU3IDQ5MS42NDYgMTI5LjYwOUM1MDQuMTQ1IDExNy4xMTEgNTA0LjE0NSA5Ni44NSA0OTEuNjQ2IDg0LjM1NEM0ODUuMzk4IDc4LjEwNSA0NzcuMjA5IDc0Ljk4IDQ2OS4wMiA3NC45OFpNNDgwLjMzNCAxMTguMjk1QzQ3Ny4zMTEgMTIxLjMxNiA0NzMuMjkzIDEyMi45OCA0NjkuMDIgMTIyLjk4UzQ2MC43MjcgMTIxLjMxNiA0NTcuNzA1IDExOC4yOTdDNDU0LjY4NCAxMTUuMjczIDQ1My4wMiAxMTEuMjU2IDQ1My4wMiAxMDYuOThDNDUzLjAyIDEwMi43MDcgNDU0LjY4NCA5OC42ODkgNDU3LjcwNSA5NS42NjhDNDYwLjcyNyA5Mi42NDUgNDY0Ljc0NCA5MC45OCA0NjkuMDIgOTAuOThDNDczLjI5MyA5MC45OCA0NzcuMzExIDkyLjY0NSA0ODAuMzM0IDk1LjY2OEM0ODMuMzU1IDk4LjY4OSA0ODUuMDIgMTAyLjcwNyA0ODUuMDIgMTA2Ljk4QzQ4NS4wMiAxMTEuMjU2IDQ4My4zNTUgMTE1LjI3MyA0ODAuMzM0IDExOC4yOTVaTTQwMS4xMzcgMTc0Ljg2NUMzMzguNjUyIDExMi4zNzkgMjM3LjM0NiAxMTIuMzc5IDE3NC44NjEgMTc0Ljg2M1MxMTIuMzc3IDMzOC42NTQgMTc0Ljg2MSA0MDEuMTQxQzIzNy4zNDYgNDYzLjYyMyAzMzguNjUyIDQ2My42MjMgNDAxLjEzNyA0MDEuMTM5UzQ2My42MjEgMjM3LjM0OCA0MDEuMTM3IDE3NC44NjVaTTM4OS44MjQgMzg5LjgyNEMzMzMuNjc4IDQ0NS45NzEgMjQyLjMyMiA0NDUuOTczIDE4Ni4xNzYgMzg5LjgyNlMxMzAuMDI5IDI0Mi4zMjIgMTg2LjE3NiAxODYuMTc2QzI0MC4zODUgMTMxLjk2OSAzMjcuMTIzIDEzMC42MjcgMzgzLjU5NiAxODEuMDk0TDI4Mi4zNDQgMjgyLjM0NEMyNzkuMjE3IDI4NS40NzEgMjc5LjIxNyAyOTAuNTMxIDI4Mi4zNDQgMjkzLjY1OFMyOTAuNTMxIDI5Ni43ODUgMjkzLjY1OCAyOTMuNjU4TDM5NC45MDggMTkyLjQwNkM0NDUuMzc1IDI0OC44NzkgNDQ0LjAzMSAzMzUuNjE3IDM4OS44MjQgMzg5LjgyNFpNMTA2Ljk4IDQzNy4wMkM5OC43ODkgNDM3LjAyIDkwLjYgNDQwLjE0NSA4NC4zNTIgNDQ2LjM5M0M3MS44NTUgNDU4Ljg5MSA3MS44NTUgNDc5LjE1MiA4NC4zNTIgNDkxLjY0OEM5MC42IDQ5Ny44OTYgOTguNzg5IDUwMS4wMjEgMTA2Ljk4IDUwMS4wMjFDMTE1LjE3IDUwMS4wMjEgMTIzLjM1OSA0OTcuODk2IDEyOS42MDcgNDkxLjY0OEMxNDIuMTA0IDQ3OS4xNTIgMTQyLjEwNCA0NTguODkxIDEyOS42MDcgNDQ2LjM5M0MxMjMuMzU5IDQ0MC4xNDUgMTE1LjE3IDQzNy4wMiAxMDYuOTggNDM3LjAyWk0xMTguMjk1IDQ4MC4zMzRDMTE1LjI3MSA0ODMuMzU1IDExMS4yNTQgNDg1LjAyIDEwNi45NzkgNDg1LjAyQzEwMi43MDUgNDg1LjAyIDk4LjY4OCA0ODMuMzU1IDk1LjY2NiA0ODAuMzM0UzkwLjk3OSA0NzMuMjk1IDkwLjk3OSA0NjkuMDIxQzkwLjk3OSA0NjQuNzQ2IDkyLjY0NSA0NjAuNzI5IDk1LjY2NiA0NTcuNzA3Qzk4LjY4OCA0NTQuNjg0IDEwMi43MDUgNDUzLjAyIDEwNi45NzkgNDUzLjAyQzExMS4yNTQgNDUzLjAyIDExNS4yNzEgNDU0LjY4NiAxMTguMjkzIDQ1Ny43MDVDMTI0LjUzMSA0NjMuOTQ1IDEyNC41MzEgNDc0LjA5NiAxMTguMjk1IDQ4MC4zMzRaTTQ2OS4wMiA0MzcuMDJDNDYwLjgzIDQzNy4wMiA0NTIuNjQxIDQ0MC4xNDUgNDQ2LjM5MyA0NDYuMzkzQzQzMy44OTUgNDU4Ljg5MSA0MzMuODk1IDQ3OS4xNTIgNDQ2LjM5MyA0OTEuNjQ4QzQ1Mi42NDEgNDk3Ljg5NiA0NjAuODMgNTAxLjAyMSA0NjkuMDIgNTAxLjAyMVM0ODUuMzk4IDQ5Ny44OTYgNDkxLjY0NiA0OTEuNjQ4QzUwNC4xNDUgNDc5LjE1MiA1MDQuMTQ1IDQ1OC44OTEgNDkxLjY0NiA0NDYuMzkzQzQ4NS4zOTggNDQwLjE0NSA0NzcuMjA5IDQzNy4wMiA0NjkuMDIgNDM3LjAyWk00ODAuMzM0IDQ4MC4zMzRDNDc3LjMxMSA0ODMuMzU1IDQ3My4yOTMgNDg1LjAyIDQ2OS4wMiA0ODUuMDJTNDYwLjcyNyA0ODMuMzU1IDQ1Ny43MDUgNDgwLjMzNFM0NTMuMDIgNDczLjI5NSA0NTMuMDIgNDY5LjAyMUM0NTMuMDIgNDY0Ljc0NiA0NTQuNjg0IDQ2MC43MjkgNDU3LjcwNSA0NTcuNzA3QzQ2MC43MjcgNDU0LjY4NCA0NjQuNzQ0IDQ1My4wMiA0NjkuMDIgNDUzLjAyQzQ3My4yOTMgNDUzLjAyIDQ3Ny4zMTEgNDU0LjY4NCA0ODAuMzMyIDQ1Ny43MDVDNDgzLjM1NSA0NjAuNzI5IDQ4NS4wMiA0NjQuNzQ2IDQ4NS4wMiA0NjkuMDIxQzQ4NS4wMiA0NzMuMjk1IDQ4My4zNTUgNDc3LjMxMiA0ODAuMzM0IDQ4MC4zMzRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Dial(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M288 64C305.672 64 320 49.674 320 32S305.672 0 288 0C270.326 0 256 14.326 256 32S270.326 64 288 64ZM288 16C296.822 16 304 23.178 304 32S296.822 48 288 48S272 40.822 272 32S279.178 16 288 16ZM106.98 138.982C115.17 138.982 123.359 135.857 129.607 129.609C142.104 117.111 142.104 96.85 129.607 84.354C123.359 78.105 115.17 74.98 106.98 74.98C98.789 74.98 90.6 78.105 84.352 84.354C71.855 96.85 71.855 117.111 84.352 129.609C90.6 135.857 98.789 138.982 106.98 138.982ZM95.666 95.668C98.688 92.645 102.705 90.98 106.979 90.98C111.254 90.98 115.271 92.646 118.295 95.668C124.531 101.906 124.531 112.057 118.295 118.295C115.271 121.316 111.254 122.98 106.979 122.98C102.705 122.98 98.688 121.316 95.666 118.297C92.645 115.273 90.979 111.256 90.979 106.98C90.979 102.707 92.645 98.689 95.666 95.668ZM32 256C14.326 256 0 270.326 0 288S14.326 320 32 320S64 305.674 64 288S49.674 256 32 256ZM32 304C23.178 304 16 296.822 16 288S23.178 272 32 272S48 279.178 48 288S40.822 304 32 304ZM544 256C526.326 256 512 270.328 512 288C512 305.674 526.326 320 544 320S576 305.674 576 288C576 270.328 561.674 256 544 256ZM544 304C535.178 304 528 296.822 528 288S535.178 272 544 272S560 279.178 560 288S552.822 304 544 304ZM469.02 74.98C460.83 74.98 452.641 78.105 446.393 84.354C433.895 96.85 433.895 117.111 446.393 129.609C452.641 135.857 460.83 138.982 469.02 138.982S485.398 135.857 491.646 129.609C504.145 117.111 504.145 96.85 491.646 84.354C485.398 78.105 477.209 74.98 469.02 74.98ZM480.334 118.295C477.311 121.316 473.293 122.98 469.02 122.98S460.727 121.316 457.705 118.297C454.684 115.273 453.02 111.256 453.02 106.98C453.02 102.707 454.684 98.689 457.705 95.668C460.727 92.645 464.744 90.98 469.02 90.98C473.293 90.98 477.311 92.645 480.334 95.668C483.355 98.689 485.02 102.707 485.02 106.98C485.02 111.256 483.355 115.273 480.334 118.295ZM401.137 174.865C338.652 112.379 237.346 112.379 174.861 174.863S112.377 338.654 174.861 401.141C237.346 463.623 338.652 463.623 401.137 401.139S463.621 237.348 401.137 174.865ZM389.824 389.824C333.678 445.971 242.322 445.973 186.176 389.826S130.029 242.322 186.176 186.176C240.385 131.969 327.123 130.627 383.596 181.094L282.344 282.344C279.217 285.471 279.217 290.531 282.344 293.658S290.531 296.785 293.658 293.658L394.908 192.406C445.375 248.879 444.031 335.617 389.824 389.824ZM106.98 437.02C98.789 437.02 90.6 440.145 84.352 446.393C71.855 458.891 71.855 479.152 84.352 491.648C90.6 497.896 98.789 501.021 106.98 501.021C115.17 501.021 123.359 497.896 129.607 491.648C142.104 479.152 142.104 458.891 129.607 446.393C123.359 440.145 115.17 437.02 106.98 437.02ZM118.295 480.334C115.271 483.355 111.254 485.02 106.979 485.02C102.705 485.02 98.688 483.355 95.666 480.334S90.979 473.295 90.979 469.021C90.979 464.746 92.645 460.729 95.666 457.707C98.688 454.684 102.705 453.02 106.979 453.02C111.254 453.02 115.271 454.686 118.293 457.705C124.531 463.945 124.531 474.096 118.295 480.334ZM469.02 437.02C460.83 437.02 452.641 440.145 446.393 446.393C433.895 458.891 433.895 479.152 446.393 491.648C452.641 497.896 460.83 501.021 469.02 501.021S485.398 497.896 491.646 491.648C504.145 479.152 504.145 458.891 491.646 446.393C485.398 440.145 477.209 437.02 469.02 437.02ZM480.334 480.334C477.311 483.355 473.293 485.02 469.02 485.02S460.727 483.355 457.705 480.334S453.02 473.295 453.02 469.021C453.02 464.746 454.684 460.729 457.705 457.707C460.727 454.684 464.744 453.02 469.02 453.02C473.293 453.02 477.311 454.684 480.332 457.705C483.355 460.729 485.02 464.746 485.02 469.021C485.02 473.295 483.355 477.312 480.334 480.334Z" />
        </Icon>
    </>
}