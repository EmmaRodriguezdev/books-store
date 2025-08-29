const BookCase = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full h-full rounded-2xl shadow-2xl bg-gradient-to-b from-[#E9CCA0] via-[#FAF8F5] via-20% to-[#FAF8F5] flex flex-col">
      {children}
    </div>
  );
};

export default BookCase;
