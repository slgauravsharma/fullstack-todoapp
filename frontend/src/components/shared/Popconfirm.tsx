interface PopconfirmProps {
  onConfirm: () => void;
  onCancel: () => void;
  title: string;
}

const Popconfirm = ({ onConfirm, onCancel, title }: PopconfirmProps) => (
  <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-sm">
    <div className="bg-white shadow-lg rounded p-4 text-xs text-center w-40">
      <p className="text-gray-700">{title}</p>
      <div className="mt-2 flex justify-center space-x-2">
        <button
          onClick={onCancel}
          className="px-3 py-1 text-gray-600 bg-gray-200 rounded cursor-pointer"
        >
          No
        </button>
        <button
          onClick={onConfirm}
          className="px-3 py-1 bg-red-500 text-white rounded cursor-pointer"
        >
          Yes
        </button>
      </div>
    </div>
  </div>
);

export default Popconfirm;
