interface NavSectionProps {
  title: string;
  // eslint-disable-next-line no-undef
  children: React.ReactNode;
}

// eslint-disable-next-line no-undef
export const NavSection = ({ title, children }: NavSectionProps) => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex-1">{title}</div>
        <div className="flex-shrink-0">{children}</div>
      </div>
      <div className="border-t border-gray-300"></div>
    </div>
  );
};
