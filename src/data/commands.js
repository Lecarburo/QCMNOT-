export const commandGroups = [
  {
    system: "Linux",
    accent: "cyan",
    commands: [
      {
        command: "ip -6 addr",
        role: "Afficher les adresses IPv6 des interfaces.",
        example: "ip -6 addr show dev eth0",
      },
      {
        command: "ip -6 route",
        role: "Afficher la table de routage IPv6.",
        example: "ip -6 route",
      },
      {
        command: "ip -6 neigh",
        role: "Afficher le cache des voisins IPv6 decouverts par NDP.",
        example: "ip -6 neigh show",
      },
      {
        command: "sudo ip -6 addr add 2001:db8:1::10/64 dev eth0",
        role: "Ajouter manuellement une adresse IPv6 sur une interface.",
        example: "sudo ip -6 addr add 2001:db8:1::10/64 dev eth0",
      },
      {
        command: "sudo ip -6 route add default via 2001:db8:1::1",
        role: "Ajouter une passerelle IPv6 par defaut.",
        example: "sudo ip -6 route add default via 2001:db8:1::1",
      },
      {
        command: "ping -6 2001:db8:1::20",
        role: "Tester la connectivite vers une adresse IPv6.",
        example: "ping -6 2001:db8:1::20",
      },
      {
        command: "ping -6 fe80::xxxx%eth0",
        role: "Tester une adresse link-local en precisant l'interface.",
        example: "ping -6 fe80::a00:27ff:fe12:3456%eth0",
      },
    ],
  },
  {
    system: "Windows",
    accent: "blue",
    commands: [
      {
        command: "ipconfig /all",
        role: "Afficher la configuration complete des interfaces.",
        example: "ipconfig /all",
      },
      {
        command: "ping -6 2001:db8:1::20",
        role: "Forcer un ping en IPv6.",
        example: "ping -6 2001:db8:1::20",
      },
      {
        command: "ping -6 fe80::xxxx%12",
        role: "Tester une link-local avec l'identifiant d'interface Windows.",
        example: "ping -6 fe80::abcd%12",
      },
      {
        command: "netsh interface ipv6 show neighbors",
        role: "Afficher les voisins IPv6 connus.",
        example: "netsh interface ipv6 show neighbors",
      },
      {
        command: "route print -6",
        role: "Afficher la table de routage IPv6.",
        example: "route print -6",
      },
    ],
  },
  {
    system: "Cisco",
    accent: "violet",
    commands: [
      {
        command: "conf t",
        role: "Entrer en mode configuration globale.",
        example: "Router# conf t",
      },
      {
        command: "ipv6 unicast-routing",
        role: "Activer le routage IPv6 sur le routeur.",
        example: "Router(config)# ipv6 unicast-routing",
      },
      {
        command: "interface g0/0",
        role: "Entrer dans la configuration d'une interface.",
        example: "Router(config)# interface g0/0",
      },
      {
        command: "ipv6 address 2001:db8:1::1/64",
        role: "Configurer une adresse IPv6 sur l'interface.",
        example: "Router(config-if)# ipv6 address 2001:db8:1::1/64",
      },
      {
        command: "no shutdown",
        role: "Activer administrativement l'interface.",
        example: "Router(config-if)# no shutdown",
      },
      {
        command: "show ipv6 interface brief",
        role: "Verifier rapidement les interfaces IPv6.",
        example: "Router# show ipv6 interface brief",
      },
      {
        command: "show running-config",
        role: "Afficher la configuration courante.",
        example: "Router# show running-config",
      },
      {
        command: "show ipv6 route",
        role: "Afficher les routes IPv6.",
        example: "Router# show ipv6 route",
      },
      {
        command: "show ipv6 neighbors",
        role: "Afficher les voisins IPv6 appris via NDP.",
        example: "Router# show ipv6 neighbors",
      },
      {
        command: "ipv6 route 2001:db8:2::/64 2001:db8:10::2",
        role: "Ajouter une route statique IPv6 vers un reseau distant.",
        example: "Router(config)# ipv6 route 2001:db8:2::/64 2001:db8:10::2",
      },
    ],
  },
  {
    system: "Wireshark",
    accent: "emerald",
    commands: [
      {
        command: "ipv6",
        role: "Afficher uniquement le trafic IPv6.",
        example: "ipv6",
      },
      {
        command: "icmpv6",
        role: "Afficher ICMPv6, dont les messages NDP.",
        example: "icmpv6",
      },
      {
        command: "icmpv6.type == 133",
        role: "Filtrer les Router Solicitation.",
        example: "icmpv6.type == 133",
      },
      {
        command: "icmpv6.type == 134",
        role: "Filtrer les Router Advertisement.",
        example: "icmpv6.type == 134",
      },
      {
        command: "icmpv6.type == 135",
        role: "Filtrer les Neighbor Solicitation.",
        example: "icmpv6.type == 135",
      },
      {
        command: "icmpv6.type == 136",
        role: "Filtrer les Neighbor Advertisement.",
        example: "icmpv6.type == 136",
      },
    ],
  },
];
