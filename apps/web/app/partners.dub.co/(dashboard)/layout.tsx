import { MainNav } from "@/ui/layout/main-nav";
import { HelpButtonRSC } from "@/ui/layout/sidebar/help-button-rsc";
import { PartnersSidebarNav } from "@/ui/layout/sidebar/partners-sidebar-nav";
import PartnerAuth from "./auth";

export default function PartnerDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainNav toolContent={<HelpButtonRSC />} sidebar={PartnersSidebarNav}>
      <PartnerAuth>{children}</PartnerAuth>
    </MainNav>
  );
}
