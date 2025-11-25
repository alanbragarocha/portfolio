import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.css';

const Breadcrumbs = () => {
  const location = useLocation();
  
  // Mapear rotas para breadcrumbs
  const getBreadcrumbs = () => {
    const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
    const breadcrumbs = [{ label: 'Início', path: '/' }];
    
    let currentPath = '';
    
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Mapear segmentos para labels amigáveis
      const segmentLabels = {
        'pastor': 'Pastor',
        'calvino': 'João Calvino',
        'lutero': 'Martinho Lutero',
        'ashbel': 'Ashbel Green Simonton',
        'sobre': 'Sobre',
        'escalas': 'Escalas'
      };
      
      const label = segmentLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
      breadcrumbs.push({ label, path: currentPath });
    });
    
    return breadcrumbs;
  };
  
  const breadcrumbs = getBreadcrumbs();
  
  // Não mostrar breadcrumbs na página inicial
  if (location.pathname === '/') {
    return null;
  }
  
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <ol className="breadcrumb-list">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.path} className="breadcrumb-item">
            {index === breadcrumbs.length - 1 ? (
              <span 
                className="breadcrumb-current" 
                aria-current="page"
              >
                {breadcrumb.label}
              </span>
            ) : (
              <Link 
                to={breadcrumb.path} 
                className="breadcrumb-link"
              >
                {breadcrumb.label}
              </Link>
            )}
            {index < breadcrumbs.length - 1 && (
              <span className="breadcrumb-separator" aria-hidden="true">
                ›
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
