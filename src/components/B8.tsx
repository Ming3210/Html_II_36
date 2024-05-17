import React, { useEffect, useState } from 'react'

export default function B8() {
  const [month, setMonth] = useState<number>(0);
  const [season, setSeason] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    const month = date.getMonth() + 1;
    setMonth(month);
  };

  useEffect(() => {
    if (month >= 3 && month <= 5) {
      setSeason('Xuân');
    } else if (month >= 6 && month <= 8) {
      setSeason('Hạ');
    } else if (month >= 9 && month <= 11) {
      setSeason('Thu');
    } else {
      setSeason('Đông');
    }
  }, [month]);

  return (
    <div>
      <h1>B8</h1>
      <input onChange={handleChange} type="date" />
      <p>Bây giờ là tháng: {month}</p>
      <p>Mùa hiện tại: {season}</p>
    </div>
  );
}
