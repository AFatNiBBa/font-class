
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `warehouse-full` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/warehouse-full?s=thin warehouse-full}
 * @preview ![warehouse-full](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MTQuMzc1IDExMi42NDVMMzIyLjg3NSAwLjUxNkMzMjEgLTAuMTcyIDMxOSAtMC4xNzIgMzE3LjEyNSAwLjUxNkwyNS42MjUgMTEyLjY0NUMxMC4zMTIgMTE4LjU1MSAwIDEzMy41NTEgMCAxNDkuOTU3VjUwNEMwIDUwOC40MDYgMy41OTQgNTEyIDggNTEyUzE2IDUwOC40MDYgMTYgNTA0VjE0OS45NTdDMTYgMTQwLjExMyAyMi4xODggMTMxLjExMyAzMS4zNzUgMTI3LjU4MkwzMjAgMTYuNTQ3TDYwOC42MjUgMTI3LjU4MkM2MTcuODEyIDEzMS4xMTMgNjI0IDE0MC4xMTMgNjI0IDE0OS45NTdWNTA0QzYyNCA1MDguNDA2IDYyNy41OTQgNTEyIDYzMiA1MTJTNjQwIDUwOC40MDYgNjQwIDUwNFYxNDkuOTU3QzY0MCAxMzMuNTUxIDYyOS42ODggMTE4LjU1MSA2MTQuMzc1IDExMi42NDVaTTUyMCAxOTEuOTlIMTIwQzEwNi43ODEgMTkxLjk5IDk2IDIwMi43NzEgOTYgMjE1Ljk5VjUwNEM5NiA1MDguNDA2IDk5LjU5NCA1MTIgMTA0IDUxMlMxMTIgNTA4LjQwNiAxMTIgNTA0VjIxNS45OUMxMTIgMjExLjU4NCAxMTUuNTk0IDIwNy45OSAxMjAgMjA3Ljk5SDUyMEM1MjQuNDA2IDIwNy45OSA1MjggMjExLjU4NCA1MjggMjE1Ljk5VjUwNEM1MjggNTA4LjQwNiA1MzEuNTk0IDUxMiA1MzYgNTEyUzU0NCA1MDguNDA2IDU0NCA1MDRWMjE1Ljk5QzU0NCAyMDIuNzcxIDUzMy4yMTkgMTkxLjk5IDUyMCAxOTEuOTlaTTI4MCA0MTZIMTY4QzE1NC43NDQgNDE2IDE0NCA0MjYuNzQ2IDE0NCA0NDBWNDg4QzE0NCA1MDEuMjU0IDE1NC43NDQgNTEyIDE2OCA1MTJIMjgwQzI5My4yNTYgNTEyIDMwNCA1MDEuMjU0IDMwNCA0ODhWNDQwQzMwNCA0MjYuNzQ2IDI5My4yNTYgNDE2IDI4MCA0MTZaTTI4OCA0ODhDMjg4IDQ5Mi40MTIgMjg0LjQxMiA0OTYgMjgwIDQ5NkgxNjhDMTYzLjU5IDQ5NiAxNjAgNDkyLjQxMiAxNjAgNDg4VjQ0MEMxNjAgNDM1LjU4OCAxNjMuNTkgNDMyIDE2OCA0MzJIMjgwQzI4NC40MTIgNDMyIDI4OCA0MzUuNTg4IDI4OCA0NDBWNDg4Wk0yODAgMjg4SDE2OEMxNTQuNzQ0IDI4OCAxNDQgMjk4Ljc0NiAxNDQgMzEyVjM2MEMxNDQgMzczLjI1NCAxNTQuNzQ0IDM4NCAxNjggMzg0SDI4MEMyOTMuMjU2IDM4NCAzMDQgMzczLjI1NCAzMDQgMzYwVjMxMkMzMDQgMjk4Ljc0NiAyOTMuMjU2IDI4OCAyODAgMjg4Wk0yODggMzYwQzI4OCAzNjQuNDEyIDI4NC40MTIgMzY4IDI4MCAzNjhIMTY4QzE2My41OSAzNjggMTYwIDM2NC40MTIgMTYwIDM2MFYzMTJDMTYwIDMwNy41ODggMTYzLjU5IDMwNCAxNjggMzA0SDI4MEMyODQuNDEyIDMwNCAyODggMzA3LjU4OCAyODggMzEyVjM2MFpNNDcyIDQxNkgzNjBDMzQ2Ljc0NCA0MTYgMzM2IDQyNi43NDYgMzM2IDQ0MFY0ODhDMzM2IDUwMS4yNTQgMzQ2Ljc0NCA1MTIgMzYwIDUxMkg0NzJDNDg1LjI1NiA1MTIgNDk2IDUwMS4yNTQgNDk2IDQ4OFY0NDBDNDk2IDQyNi43NDYgNDg1LjI1NiA0MTYgNDcyIDQxNlpNNDgwIDQ4OEM0ODAgNDkyLjQxMiA0NzYuNDEyIDQ5NiA0NzIgNDk2SDM2MEMzNTUuNTkgNDk2IDM1MiA0OTIuNDEyIDM1MiA0ODhWNDQwQzM1MiA0MzUuNTg4IDM1NS41OSA0MzIgMzYwIDQzMkg0NzJDNDc2LjQxMiA0MzIgNDgwIDQzNS41ODggNDgwIDQ0MFY0ODhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function WarehouseFull(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M614.375 112.645L322.875 0.516C321 -0.172 319 -0.172 317.125 0.516L25.625 112.645C10.312 118.551 0 133.551 0 149.957V504C0 508.406 3.594 512 8 512S16 508.406 16 504V149.957C16 140.113 22.188 131.113 31.375 127.582L320 16.547L608.625 127.582C617.812 131.113 624 140.113 624 149.957V504C624 508.406 627.594 512 632 512S640 508.406 640 504V149.957C640 133.551 629.688 118.551 614.375 112.645ZM520 191.99H120C106.781 191.99 96 202.771 96 215.99V504C96 508.406 99.594 512 104 512S112 508.406 112 504V215.99C112 211.584 115.594 207.99 120 207.99H520C524.406 207.99 528 211.584 528 215.99V504C528 508.406 531.594 512 536 512S544 508.406 544 504V215.99C544 202.771 533.219 191.99 520 191.99ZM280 416H168C154.744 416 144 426.746 144 440V488C144 501.254 154.744 512 168 512H280C293.256 512 304 501.254 304 488V440C304 426.746 293.256 416 280 416ZM288 488C288 492.412 284.412 496 280 496H168C163.59 496 160 492.412 160 488V440C160 435.588 163.59 432 168 432H280C284.412 432 288 435.588 288 440V488ZM280 288H168C154.744 288 144 298.746 144 312V360C144 373.254 154.744 384 168 384H280C293.256 384 304 373.254 304 360V312C304 298.746 293.256 288 280 288ZM288 360C288 364.412 284.412 368 280 368H168C163.59 368 160 364.412 160 360V312C160 307.588 163.59 304 168 304H280C284.412 304 288 307.588 288 312V360ZM472 416H360C346.744 416 336 426.746 336 440V488C336 501.254 346.744 512 360 512H472C485.256 512 496 501.254 496 488V440C496 426.746 485.256 416 472 416ZM480 488C480 492.412 476.412 496 472 496H360C355.59 496 352 492.412 352 488V440C352 435.588 355.59 432 360 432H472C476.412 432 480 435.588 480 440V488Z" />
        </Icon>
    </>
}